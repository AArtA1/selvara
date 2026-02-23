"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Quiz.module.css";

type Lang = "ru" | "en";
type Bilingual = { ru: string; en: string };

// ── Questions ──────────────────────────────────────────────────────────────

const questions = [
  {
    id: "position",
    question: { ru: "Как вы обычно спите?", en: "How do you usually sleep?" },
    options: [
      { value: "back",    label: { ru: "На спине",   en: "On my back" },   icon: "↑" },
      { value: "side",    label: { ru: "На боку",    en: "On my side" },   icon: "←" },
      { value: "stomach", label: { ru: "На животе",  en: "On my stomach"}, icon: "↓" },
      { value: "mix",     label: { ru: "По-разному", en: "I move around" },icon: "↔" },
    ],
  },
  {
    id: "firmness",
    question: { ru: "Какие ощущения предпочитаете?", en: "What feel do you prefer?" },
    options: [
      { value: "soft",   label: { ru: "Мягкое, обволакивающее",       en: "Soft and cradling" },     icon: "○" },
      { value: "medium", label: { ru: "Сбалансированное",              en: "Balanced" },              icon: "◎" },
      { value: "firm",   label: { ru: "Упругое, с поддержкой",        en: "Firm and supportive" },   icon: "●" },
    ],
  },
  {
    id: "temp",
    question: { ru: "Как вы себя чувствуете ночью?", en: "How do you feel at night?" },
    options: [
      { value: "cold",    label: { ru: "Часто мёрзну",       en: "I often get cold" },   icon: "❄" },
      { value: "neutral", label: { ru: "Всё нормально",      en: "Comfortable" },        icon: "〜" },
      { value: "hot",     label: { ru: "Бывает жарко",       en: "I often get hot" },    icon: "☀" },
    ],
  },
];

// ── Recommendation matrix ──────────────────────────────────────────────────

const matrix: Record<string, Record<string, Record<string, string>>> = {
  back: {
    soft:   { cold: "selvara-reserve",   neutral: "selvara-reserve",   hot: "selvara-signature" },
    medium: { cold: "selvara-origin",    neutral: "selvara-origin",    hot: "selvara-coconut"   },
    firm:   { cold: "selvara-linen",     neutral: "selvara-linen",     hot: "selvara-linen"     },
  },
  side: {
    soft:   { cold: "selvara-reserve",   neutral: "selvara-reserve",   hot: "selvara-aero"      },
    medium: { cold: "selvara-signature", neutral: "selvara-signature", hot: "selvara-aero"      },
    firm:   { cold: "selvara-origin",    neutral: "selvara-origin",    hot: "selvara-coconut"   },
  },
  stomach: {
    soft:   { cold: "selvara-coconut",   neutral: "selvara-coconut",   hot: "selvara-coconut"   },
    medium: { cold: "selvara-coconut",   neutral: "selvara-linen",     hot: "selvara-linen"     },
    firm:   { cold: "selvara-linen",     neutral: "selvara-linen",     hot: "selvara-linen"     },
  },
  mix: {
    soft:   { cold: "selvara-signature", neutral: "selvara-signature", hot: "selvara-aero"      },
    medium: { cold: "selvara-origin",    neutral: "selvara-origin",    hot: "selvara-coconut"   },
    firm:   { cold: "selvara-linen",     neutral: "selvara-linen",     hot: "selvara-linen"     },
  },
};

// ── Product info for result screen ────────────────────────────────────────

const productInfo: Record<string, { name: string; tagline: Bilingual; price: string }> = {
  "selvara-linen":     { name: "Linen",     tagline: { ru: "Льняной войлок и кокос",                  en: "Linen felt and coconut" },             price: "от 32 000 ₽" },
  "selvara-coconut":   { name: "Coconut",   tagline: { ru: "Натуральный латекс, средняя жёсткость",    en: "Natural latex, medium firmness" },      price: "от 33 000 ₽" },
  "selvara-aero":      { name: "Aero",      tagline: { ru: "Перфорированный латекс, мягкая посадка",  en: "Perforated latex, soft feel" },         price: "от 32 500 ₽" },
  "selvara-origin":    { name: "Origin",    tagline: { ru: "Латекс и войлок, 1024 пружины/м²",        en: "Latex and felt, 1024 springs/m²" },     price: "от 38 000 ₽" },
  "selvara-latex":     { name: "Latex",     tagline: { ru: "Беспружинный, десять слоёв латекса",      en: "Springless, ten latex layers" },         price: "от 41 000 ₽" },
  "selvara-signature": { name: "Signature", tagline: { ru: "Кокос, латекс и мемори-пена",             en: "Coconut, latex and memory foam" },      price: "от 50 000 ₽" },
  "selvara-reserve":   { name: "Reserve",   tagline: { ru: "Бельгийский латекс. Флагман.",            en: "Belgian latex. Flagship." },            price: "от 62 000 ₽" },
};

const copy = {
  step:    { ru: "Вопрос",      en: "Question" },
  of:      { ru: "из",          en: "of" },
  result:  { ru: "Ваша модель", en: "Your model" },
  why:     { ru: "Почему именно этот матрас?", en: "Why this mattress?" },
  reasons: {
    "selvara-linen":     { ru: "Твёрдая поверхность обеспечивает правильное положение позвоночника.", en: "The firm surface maintains correct spinal alignment." },
    "selvara-coconut":   { ru: "Сбалансированная поддержка подходит для большинства поз и предпочтений.", en: "Balanced support suits most sleep positions and preferences." },
    "selvara-aero":      { ru: "Перфорированный латекс обеспечивает вентиляцию и мягкую поддержку.", en: "Perforated latex provides ventilation with soft support." },
    "selvara-origin":    { ru: "1024 пружины/м² и натуральный латекс создают точечную поддержку.", en: "1024 springs/m² and natural latex deliver precise point support." },
    "selvara-latex":     { ru: "Десять слоёв натурального латекса без пружин — тихо, упруго, долговечно.", en: "Ten layers of natural latex, no springs — quiet, resilient, lasting." },
    "selvara-signature": { ru: "Мемори-пена адаптируется к контурам тела и снимает давление на суставы.", en: "Memory foam adapts to body contours and relieves joint pressure." },
    "selvara-reserve":   { ru: "Бельгийский латекс высшей очистки — мягкость без потери упругости.", en: "Highest-grade Belgian latex — softness without loss of resilience." },
  },
  view:    { ru: "Посмотреть модель", en: "View model" },
  catalog: { ru: "Весь каталог",     en: "Full catalog" },
  restart: { ru: "Пройти снова",     en: "Start over" },
};

// ── Component ──────────────────────────────────────────────────────────────

export function Quiz() {
  const { lang } = useLanguage();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQ = questions[step];
  const total = questions.length;
  const isDone = step >= total;

  const slug = isDone
    ? matrix[answers.position]?.[answers.firmness]?.[answers.temp] ?? "selvara-origin"
    : null;
  const product = slug ? productInfo[slug] : null;

  function handleSelect(value: string) {
    const next = { ...answers, [currentQ.id]: value };
    setAnswers(next);
    if (step < total - 1) {
      setStep(step + 1);
    } else {
      setStep(total); // show result
    }
  }

  function restart() {
    setStep(0);
    setAnswers({});
  }

  if (isDone && slug && product) {
    return (
      <div className={styles.result}>
        <span className={styles.resultEyebrow}>{copy.result[lang]}</span>
        <h2 className={styles.resultName}>{product.name}</h2>
        <p className={styles.resultTagline}>{product.tagline[lang]}</p>
        <p className={styles.resultPrice}>{product.price}</p>

        <div className={styles.resultWhy}>
          <span className={styles.resultWhyLabel}>{copy.why[lang]}</span>
          <p className={styles.resultWhyText}>{copy.reasons[slug as keyof typeof copy.reasons][lang]}</p>
        </div>

        <div className={styles.resultActions}>
          <Link href={`/${lang}/mattresses/${slug}`} className={styles.btnPrimary}>
            {copy.view[lang]}
          </Link>
          <Link href={`/${lang}/mattresses`} className={styles.btnSecondary}>
            {copy.catalog[lang]}
          </Link>
        </div>

        <button className={styles.restart} onClick={restart}>
          {copy.restart[lang]}
        </button>
      </div>
    );
  }

  return (
    <div className={styles.quiz}>
      {/* Progress */}
      <div className={styles.progress}>
        <span className={styles.progressLabel}>
          {copy.step[lang]} {step + 1} {copy.of[lang]} {total}
        </span>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${((step + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className={styles.question}>{currentQ.question[lang as Lang]}</h2>

      {/* Options */}
      <div className={styles.options}>
        {currentQ.options.map((opt) => (
          <button
            key={opt.value}
            className={styles.option}
            onClick={() => handleSelect(opt.value)}
          >
            <span className={styles.optionIcon}>{opt.icon}</span>
            <span className={styles.optionLabel}>{opt.label[lang as Lang]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
