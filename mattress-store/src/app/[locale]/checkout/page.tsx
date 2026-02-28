"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { medusa } from "@/lib/medusa";
import type { Lang } from "@/contexts/LanguageContext";
import styles from "./Checkout.module.css";

const copy = {
  title:       { ru: "Оформление заказа",     en: "Checkout" },
  contact:     { ru: "Контактные данные",      en: "Contact details" },
  delivery:    { ru: "Адрес доставки",         en: "Delivery address" },
  firstName:   { ru: "Имя и фамилия",          en: "Full name" },
  phone:       { ru: "Телефон",                en: "Phone" },
  email:       { ru: "Email",                  en: "Email" },
  city:        { ru: "Город",                  en: "City" },
  address:     { ru: "Адрес",                  en: "Address" },
  comment:     { ru: "Комментарий (необязательно)", en: "Comment (optional)" },
  orderTitle:  { ru: "Ваш заказ",              en: "Your order" },
  total:       { ru: "Итого",                  en: "Total" },
  submit:      { ru: "Подтвердить заказ",      en: "Confirm order" },
  submitting:  { ru: "Оформляем…",             en: "Processing…" },
  empty:       { ru: "Корзина пуста",          en: "Your cart is empty" },
  backToCart:  { ru: "Вернуться к корзине",    en: "Back to cart" },
};

function formatPrice(amount: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(amount / 100);
}

export default function CheckoutPage() {
  const params = useParams();
  const lang = (params?.locale as Lang) ?? "ru";
  const router = useRouter();
  const { cart, closeCart } = useCart();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    comment: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  // Close sidebar when entering checkout
  useEffect(() => {
    closeCart();
  }, [closeCart]);

  const items = cart?.items ?? [];
  const total = cart?.total ?? 0;

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.fullName.trim()) e.fullName = lang === "ru" ? "Обязательное поле" : "Required";
    if (!form.phone.trim()) e.phone = lang === "ru" ? "Обязательное поле" : "Required";
    if (!form.email.trim()) e.email = lang === "ru" ? "Обязательное поле" : "Required";
    if (!form.city.trim()) e.city = lang === "ru" ? "Обязательное поле" : "Required";
    if (!form.address.trim()) e.address = lang === "ru" ? "Обязательное поле" : "Required";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    if (!cart) return;
    setSubmitting(true);
    try {
      // Update cart with customer info
      await medusa.store.cart.update(cart.id, {
        email: form.email,
        shipping_address: {
          first_name: form.fullName.split(" ")[0] ?? form.fullName,
          last_name: form.fullName.split(" ").slice(1).join(" ") || " ",
          address_1: form.address,
          city: form.city,
          country_code: "ru",
          phone: form.phone,
        },
      });

      // Init payment session (system/manual provider — no actual payment)
      await medusa.store.payment.initiatePaymentSession(cart, {
        provider_id: "pp_system_default",
      });

      // Complete the cart → creates an order
      const result = await medusa.store.cart.complete(cart.id);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const orderId = (result as any).order?.id ?? (result as any).id ?? "";

      // Clear cart from localStorage
      localStorage.removeItem("selvara_cart_id");

      router.push(`/${lang}/order-success?id=${orderId}`);
    } catch (err) {
      console.error("Checkout failed:", err);
      setSubmitting(false);
    }
  }

  function handleChange(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };
  }

  if (items.length === 0) {
    return (
      <main className={styles.emptyWrap}>
        <p className={styles.emptyText}>{copy.empty[lang]}</p>
        <Link href={`/${lang}/mattresses`} className={styles.backLink}>
          {copy.backToCart[lang]}
        </Link>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>{copy.title[lang]}</h1>

        <div className={styles.layout}>
          {/* ── Form ── */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <section className={styles.formSection}>
              <h2 className={styles.sectionTitle}>{copy.contact[lang]}</h2>

              <div className={styles.field}>
                <label className={styles.label}>{copy.firstName[lang]}</label>
                <input
                  className={`${styles.input} ${errors.fullName ? styles.inputError : ""}`}
                  type="text"
                  value={form.fullName}
                  onChange={handleChange("fullName")}
                  autoComplete="name"
                />
                {errors.fullName && <span className={styles.errorMsg}>{errors.fullName}</span>}
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label}>{copy.phone[lang]}</label>
                  <input
                    className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    autoComplete="tel"
                  />
                  {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>{copy.email[lang]}</label>
                  <input
                    className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    autoComplete="email"
                  />
                  {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                </div>
              </div>
            </section>

            <section className={styles.formSection}>
              <h2 className={styles.sectionTitle}>{copy.delivery[lang]}</h2>

              <div className={styles.field}>
                <label className={styles.label}>{copy.city[lang]}</label>
                <input
                  className={`${styles.input} ${errors.city ? styles.inputError : ""}`}
                  type="text"
                  value={form.city}
                  onChange={handleChange("city")}
                  autoComplete="address-level2"
                />
                {errors.city && <span className={styles.errorMsg}>{errors.city}</span>}
              </div>

              <div className={styles.field}>
                <label className={styles.label}>{copy.address[lang]}</label>
                <input
                  className={`${styles.input} ${errors.address ? styles.inputError : ""}`}
                  type="text"
                  value={form.address}
                  onChange={handleChange("address")}
                  autoComplete="street-address"
                />
                {errors.address && <span className={styles.errorMsg}>{errors.address}</span>}
              </div>

              <div className={styles.field}>
                <label className={styles.label}>{copy.comment[lang]}</label>
                <textarea
                  className={styles.textarea}
                  value={form.comment}
                  onChange={handleChange("comment")}
                  rows={3}
                />
              </div>
            </section>

            <button
              type="submit"
              className={`${styles.submitBtn} ${submitting ? styles.submitBtnLoading : ""}`}
              disabled={submitting}
            >
              {submitting ? copy.submitting[lang] : copy.submit[lang]}
            </button>
          </form>

          {/* ── Order summary ── */}
          <aside className={styles.summary}>
            <h2 className={styles.sectionTitle}>{copy.orderTitle[lang]}</h2>

            <ul className={styles.summaryItems}>
              {items.map((item) => (
                <li key={item.id} className={styles.summaryItem}>
                  <div className={styles.summaryItemInfo}>
                    <span className={styles.summaryItemName}>{item.title}</span>
                    {item.variant_title && (
                      <span className={styles.summaryItemSize}>{item.variant_title}</span>
                    )}
                  </div>
                  <div className={styles.summaryItemRight}>
                    <span className={styles.summaryItemQty}>×{item.quantity}</span>
                    <span className={styles.summaryItemPrice}>
                      {formatPrice(item.unit_price * item.quantity)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.summaryTotal}>
              <span className={styles.totalLabel}>{copy.total[lang]}</span>
              <span className={styles.totalValue}>{formatPrice(total)}</span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
