"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { medusa } from "@/lib/medusa";

interface LineItem {
  id: string;
  title: string;
  variant_title: string | null;
  quantity: number;
  unit_price: number;
  thumbnail: string | null;
}

interface Cart {
  id: string;
  items: LineItem[];
  total: number;
  currency_code: string;
  region_id: string | null;
}

interface CartContextValue {
  cart: Cart | null;
  isOpen: boolean;
  loading: boolean;
  itemCount: number;
  openCart: () => void;
  closeCart: () => void;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  removeItem: (lineItemId: string) => Promise<void>;
  updateItem: (lineItemId: string, quantity: number) => Promise<void>;
}

const CartContext = createContext<CartContextValue | null>(null);

const CART_ID_KEY = "selvara_cart_id";
const REGION_ID = "reg_01KJGGESE3CX5QZ8YXZPRPJFE3"; // Russia/RUB region

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const itemCount =
    cart?.items?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;

  // Initialize cart from localStorage or create new
  useEffect(() => {
    const init = async () => {
      const savedId = localStorage.getItem(CART_ID_KEY);
      if (savedId) {
        try {
          const { cart: existing } = await medusa.store.cart.retrieve(savedId);
          setCart(existing as unknown as Cart);
          return;
        } catch {
          localStorage.removeItem(CART_ID_KEY);
        }
      }
      // Create new cart
      try {
        const { cart: newCart } = await medusa.store.cart.create({
          region_id: REGION_ID,
        });
        localStorage.setItem(CART_ID_KEY, newCart.id);
        setCart(newCart as unknown as Cart);
      } catch (err) {
        console.error("Failed to create cart:", err);
      }
    };
    init();
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback(
    async (variantId: string, quantity = 1) => {
      if (!cart) return;
      setLoading(true);
      try {
        const { cart: updated } = await medusa.store.cart.createLineItem(
          cart.id,
          { variant_id: variantId, quantity }
        );
        setCart(updated as unknown as Cart);
        setIsOpen(true);
      } catch (err) {
        console.error("Failed to add item:", err);
      } finally {
        setLoading(false);
      }
    },
    [cart]
  );

  const removeItem = useCallback(
    async (lineItemId: string) => {
      if (!cart) return;
      setLoading(true);
      try {
        const { cart: updated } = await medusa.store.cart.deleteLineItem(
          cart.id,
          lineItemId
        );
        setCart(updated as unknown as Cart);
      } catch (err) {
        console.error("Failed to remove item:", err);
      } finally {
        setLoading(false);
      }
    },
    [cart]
  );

  const updateItem = useCallback(
    async (lineItemId: string, quantity: number) => {
      if (!cart) return;
      setLoading(true);
      try {
        const { cart: updated } = await medusa.store.cart.updateLineItem(
          cart.id,
          lineItemId,
          { quantity }
        );
        setCart(updated as unknown as Cart);
      } catch (err) {
        console.error("Failed to update item:", err);
      } finally {
        setLoading(false);
      }
    },
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        loading,
        itemCount,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
