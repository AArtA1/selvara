"use client";

import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./CartSidebar.module.css";

function formatPrice(amount: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount / 100);
}

export function CartSidebar() {
  const { cart, isOpen, loading, closeCart, removeItem, updateItem } = useCart();
  const { lang } = useLanguage();

  const copy = {
    title: { ru: "Корзина", en: "Cart" },
    empty: { ru: "Корзина пуста", en: "Your cart is empty" },
    emptyHint: { ru: "Добавьте матрас из каталога", en: "Add a mattress from our catalog" },
    total: { ru: "Итого", en: "Total" },
    checkout: { ru: "Оформить заказ", en: "Checkout" },
    catalog: { ru: "Перейти в каталог", en: "Browse catalog" },
    remove: { ru: "Удалить", en: "Remove" },
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ""}`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`} aria-label={copy.title[lang]}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.title}>{copy.title[lang]}</span>
          <button className={styles.closeBtn} onClick={closeCart} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {!cart || cart.items.length === 0 ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </div>
              <p className={styles.emptyText}>{copy.empty[lang]}</p>
              <p className={styles.emptyHint}>{copy.emptyHint[lang]}</p>
              <Link href={`/${lang}/mattresses`} className={styles.catalogLink} onClick={closeCart}>
                {copy.catalog[lang]}
              </Link>
            </div>
          ) : (
            <>
              <ul className={styles.items}>
                {cart.items.map((item) => (
                  <li key={item.id} className={styles.item}>
                    <div className={styles.itemInfo}>
                      <p className={styles.itemTitle}>{item.title}</p>
                      {item.variant_title && (
                        <p className={styles.itemSubtitle}>{item.variant_title}</p>
                      )}
                      <p className={styles.itemPrice}>{formatPrice(item.unit_price)}</p>
                    </div>
                    <div className={styles.itemControls}>
                      <div className={styles.qty}>
                        <button
                          className={styles.qtyBtn}
                          onClick={() => item.quantity > 1 && updateItem(item.id, item.quantity - 1)}
                          disabled={loading || item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className={styles.qtyValue}>{item.quantity}</span>
                        <button
                          className={styles.qtyBtn}
                          onClick={() => updateItem(item.id, item.quantity + 1)}
                          disabled={loading}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        className={styles.removeBtn}
                        onClick={() => removeItem(item.id)}
                        disabled={loading}
                      >
                        {copy.remove[lang]}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className={styles.footer}>
                <div className={styles.totalRow}>
                  <span className={styles.totalLabel}>{copy.total[lang]}</span>
                  <span className={styles.totalValue}>{formatPrice(cart.total)}</span>
                </div>
                <Link
                  href={`/${lang}/checkout`}
                  className={styles.checkoutBtn}
                  onClick={closeCart}
                >
                  {copy.checkout[lang]}
                </Link>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
