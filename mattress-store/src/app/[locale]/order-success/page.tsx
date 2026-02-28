"use client";

import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import type { Lang } from "@/contexts/LanguageContext";
import styles from "./OrderSuccess.module.css";

const copy = {
  title:    { ru: "Заказ оформлен",                                           en: "Order confirmed" },
  subtitle: { ru: "Мы свяжемся с вами в течение дня для подтверждения.",      en: "We will contact you within the day to confirm your order." },
  orderNum: { ru: "Номер заказа",                                              en: "Order number" },
  back:     { ru: "Вернуться на главную",                                      en: "Back to homepage" },
  catalog:  { ru: "Смотреть другие матрасы",                                   en: "Browse mattresses" },
};

export default function OrderSuccessPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const lang = (params?.locale as Lang) ?? "ru";
  const orderId = searchParams.get("id") ?? "";

  // Show only last 8 chars to keep it human-readable
  const shortId = orderId ? orderId.slice(-8).toUpperCase() : null;

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* Checkmark icon */}
        <div className={styles.iconWrap}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="23" stroke="var(--color-brand-dark)" strokeWidth="1.2" strokeOpacity="0.15" />
            <path d="M14 24l7 7 13-14" stroke="var(--color-brand-dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className={styles.title}>{copy.title[lang]}</h1>
        <p className={styles.subtitle}>{copy.subtitle[lang]}</p>

        {shortId && (
          <p className={styles.orderNum}>
            {copy.orderNum[lang]}: <span className={styles.orderNumVal}>#{shortId}</span>
          </p>
        )}

        <div className={styles.actions}>
          <Link href={`/${lang}`} className={styles.btnPrimary}>
            {copy.back[lang]}
          </Link>
          <Link href={`/${lang}/mattresses`} className={styles.btnSecondary}>
            {copy.catalog[lang]}
          </Link>
        </div>
      </div>
    </main>
  );
}
