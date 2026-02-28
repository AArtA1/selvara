"use client";

import { useState } from "react";
import { useLanguage, t } from "@/contexts/LanguageContext";
import styles from "./BuyingGuide.module.css";

/* ── Data ───────────────────────────────────────────── */

const firmnessLevels = [
  {
    label: { ru: "Мягкий", en: "Soft" },
    models: ["Aero", "Reserve"],
    desc: {
      ru: "Обволакивающая мягкость. Перфорированный латекс или мемори-пена повторяют контуры тела, снимая точечное давление.",
      en: "Enveloping softness. Perforated latex or memory foam follows body contours, relieving pressure points.",
    },
  },
  {
    label: { ru: "Мягкий / Средний", en: "Soft / Medium" },
    models: ["Signature"],
    desc: {
      ru: "Мягкий верхний слой с мемори-пеной и упругая латексная основа. Тело мягко погружается, но позвоночник остаётся на месте.",
      en: "Soft memory foam top layer with resilient latex base. The body gently sinks in, but the spine stays aligned.",
    },
  },
  {
    label: { ru: "Средний", en: "Medium" },
    models: ["Coconut", "Origin"],
    desc: {
      ru: "Баланс мягкости и поддержки. Латекс и кокосовая койра работают вместе — тело поддерживается без ощущения жёсткости.",
      en: "Balance of softness and support. Latex and coconut coir work together — supported without feeling rigid.",
    },
  },
  {
    label: { ru: "Средний / Твёрдый", en: "Medium / Firm" },
    models: ["Latex"],
    desc: {
      ru: "Десять слоёв натурального латекса и кокоса без пружин. Упругая поддержка с ощутимой плотностью — для тех, кто любит спать на твёрдом.",
      en: "Ten layers of natural latex and coconut, no springs. Resilient support with noticeable density — for those who prefer sleeping firm.",
    },
  },
  {
    label: { ru: "Твёрдый", en: "Firm" },
    models: ["Linen"],
    desc: {
      ru: "Чёткая поддержка позвоночника. Льняной войлок и плотная койра создают ровную поверхность без проваливания.",
      en: "Clear spinal support. Linen felt and dense coir create an even surface without sinking.",
    },
  },
];

const sizes = [
  {
    cm: 90,
    dim: "90×200",
    label: { ru: "Односпальный", en: "Single" },
    rec: {
      ru: "Одному. Детская или гостевая.",
      en: "For one. Kid's or guest room.",
    },
  },
  {
    cm: 120,
    dim: "120×200",
    label: { ru: "Полуторный", en: "Small Double" },
    rec: {
      ru: "Просторный сон для одного.",
      en: "Spacious sleep for one.",
    },
  },
  {
    cm: 140,
    dim: "140×200",
    label: { ru: "Двуспальный", en: "Double" },
    rec: {
      ru: "Для одного щедро, для двоих компактно.",
      en: "Generous for one, compact for two.",
    },
  },
  {
    cm: 160,
    dim: "160×200",
    label: { ru: "Евро", en: "Queen" },
    rec: {
      ru: "Наш выбор для пар. По 80 см каждому.",
      en: "Our pick for couples. 80 cm each.",
    },
  },
  {
    cm: 180,
    dim: "180×200",
    label: { ru: "Королевский", en: "King" },
    rec: {
      ru: "Комфорт без компромиссов для двоих.",
      en: "No-compromise comfort for two.",
    },
  },
  {
    cm: 200,
    dim: "200×200",
    label: { ru: "Макси", en: "Super King" },
    rec: {
      ru: "Максимум пространства. Квадратный формат.",
      en: "Maximum space. Square format.",
    },
  },
];

const layers = [
  {
    name: { ru: "Натуральный латекс", en: "Natural Latex" },
    detail: {
      ru: "Упругий, дышащий, гипоаллергенный. Восстанавливает форму за секунды, не продавливается со временем.",
      en: "Resilient, breathable, hypoallergenic. Recovers shape in seconds, doesn't sag over time.",
    },
    color: "#ede5d8",
  },
  {
    name: { ru: "Кокосовая койра", en: "Coconut Coir" },
    detail: {
      ru: "Жёсткая натуральная основа, отводит влагу. Обеспечивает устойчивую опорную поверхность.",
      en: "Firm natural base, wicks moisture. Provides a stable support surface.",
    },
    color: "#d4c4a8",
  },
  {
    name: { ru: "Льняной войлок", en: "Linen Felt" },
    detail: {
      ru: "Терморегуляция и естественная прочность. Дышит, не накапливает влагу и запахи.",
      en: "Thermoregulation and natural durability. Breathes, doesn't accumulate moisture or odors.",
    },
    color: "#ddd5c7",
  },
  {
    name: { ru: "Пружинный блок", en: "Spring Unit" },
    detail: {
      ru: "Независимые пружины (до 1024/м²). Точечная поддержка каждого участка тела, без эффекта гамака.",
      en: "Independent springs (up to 1024/m²). Point-by-point body support, no hammock effect.",
    },
    color: "#c5bdb0",
  },
];

const milestones = [
  {
    day: { ru: "День 1", en: "Day 1" },
    title: { ru: "Доставка и установка", en: "Delivery & Setup" },
    detail: {
      ru: "Бесплатно привезём, занесём и установим. Старый матрас заберём по желанию.",
      en: "Free delivery, carry-in and setup. We'll take your old mattress if you'd like.",
    },
  },
  {
    day: { ru: "Неделя 2–3", en: "Week 2–3" },
    title: { ru: "Период адаптации", en: "Adaptation Period" },
    detail: {
      ru: "Тело привыкает к новой поддержке. Первые ощущения могут отличаться от финальных — это нормально.",
      en: "Your body adjusts to new support. First impressions may differ from final — that's normal.",
    },
  },
  {
    day: { ru: "День 100", en: "Day 100" },
    title: { ru: "Ваше решение", en: "Your Decision" },
    detail: {
      ru: "Не подошёл — заберём бесплатно, вернём полную стоимость. Без вопросов и скрытых условий.",
      en: "Not right for you — free pickup, full refund. No questions, no hidden terms.",
    },
  },
];

const tabLabels = [
  { ru: "Жёсткость", en: "Firmness" },
  { ru: "Размер", en: "Size" },
  { ru: "Материалы", en: "Materials" },
  { ru: "Пробный период", en: "Trial" },
];

/* ── Component ──────────────────────────────────────── */

export function BuyingGuide() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [firmness, setFirmness] = useState(2);
  const [selectedSize, setSelectedSize] = useState(3);
  const [expandedLayer, setExpandedLayer] = useState<number | null>(0);
  const [activeMilestone, setActiveMilestone] = useState(0);

  return (
    <section className={styles.section}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <span className={styles.eyebrow}>
          {t({ ru: "Гид по выбору", en: "Buying Guide" }, lang)}
        </span>
        <h2 className={styles.heading}>
          {t(
            {
              ru: "Как выбрать матрас, который подходит именно вам",
              en: "How to choose the right mattress for you",
            },
            lang
          )}
        </h2>
        <div className={styles.headingRule} />
      </div>

      {/* ── Tabs ── */}
      <div className={styles.tabs} role="tablist">
        {tabLabels.map((tab, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === activeTab}
            className={`${styles.tab} ${i === activeTab ? styles.tabActive : ""}`}
            onClick={() => setActiveTab(i)}
          >
            {t(tab, lang)}
          </button>
        ))}
      </div>

      {/* ── Content ── */}
      <div className={styles.content} role="tabpanel">
        {/* ── Tab 0: Firmness Scale ── */}
        {activeTab === 0 && (
          <div className={styles.panel}>
            <div className={styles.firmnessScale}>
              <div className={styles.firmnessTrack}>
                <div
                  className={styles.firmnessThumb}
                  style={{ left: `${firmness * 25}%` }}
                />
              </div>
              <div className={styles.firmnessLabels}>
                {firmnessLevels.map((level, i) => (
                  <button
                    key={i}
                    className={`${styles.firmnessLabel} ${
                      i === firmness ? styles.firmnessLabelActive : ""
                    }`}
                    onClick={() => setFirmness(i)}
                  >
                    {t(level.label, lang)}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.firmnessInfo}>
              <div className={styles.modelTags}>
                {firmnessLevels[firmness].models.map((m) => (
                  <span key={m} className={styles.modelTag}>
                    {m}
                  </span>
                ))}
              </div>
              <p className={styles.panelText}>
                {t(firmnessLevels[firmness].desc, lang)}
              </p>
            </div>

            <p className={styles.panelNote}>
              {t(
                {
                  ru: "Все модели — двусторонние. Переверните и выберите сторону с нужной жёсткостью.",
                  en: "All models are dual-sided. Flip and choose the side with your preferred firmness.",
                },
                lang
              )}
            </p>
          </div>
        )}

        {/* ── Tab 1: Size Visual ── */}
        {activeTab === 1 && (
          <div className={styles.panel}>
            <div className={styles.sizeVisual}>
              {sizes.map((size, i) => (
                <button
                  key={i}
                  className={`${styles.sizeBlock} ${
                    i === selectedSize ? styles.sizeBlockActive : ""
                  }`}
                  style={
                    { "--size-ratio": size.cm / 200 } as React.CSSProperties
                  }
                  onClick={() => setSelectedSize(i)}
                >
                  <span className={styles.sizeCm}>{size.cm}</span>
                </button>
              ))}
            </div>

            <div className={styles.sizeInfo}>
              <span className={styles.sizeLabel}>
                {t(sizes[selectedSize].label, lang)}
              </span>
              <span className={styles.sizeDim}>
                {sizes[selectedSize].dim}{" "}
                {t({ ru: "см", en: "cm" }, lang)}
              </span>
              <p className={styles.panelText}>
                {t(sizes[selectedSize].rec, lang)}
              </p>
            </div>

            <p className={styles.panelNote}>
              {t(
                {
                  ru: "Нестандартный размер? Изготовим по вашим меркам.",
                  en: "Non-standard size? We'll make it to your measurements.",
                },
                lang
              )}
            </p>
          </div>
        )}

        {/* ── Tab 2: Material Layers ── */}
        {activeTab === 2 && (
          <div className={styles.panel}>
            <div className={styles.layerStack}>
              {layers.map((layer, i) => (
                <div
                  key={i}
                  className={`${styles.layer} ${
                    i === expandedLayer ? styles.layerExpanded : ""
                  }`}
                  style={
                    { "--layer-color": layer.color } as React.CSSProperties
                  }
                >
                  <button
                    className={styles.layerHeader}
                    onClick={() =>
                      setExpandedLayer(i === expandedLayer ? null : i)
                    }
                  >
                    <span className={styles.layerName}>
                      {t(layer.name, lang)}
                    </span>
                    <span className={styles.layerIcon} aria-hidden="true" />
                  </button>
                  <div className={styles.layerBody}>
                    <p className={styles.layerDetail}>
                      {t(layer.detail, lang)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className={styles.panelNote}>
              {t(
                {
                  ru: "Слои фиксируются стяжками и простёжкой. Без клея и синтетики.",
                  en: "Layers secured with ties and quilting. No adhesives or synthetics.",
                },
                lang
              )}
            </p>
          </div>
        )}

        {/* ── Tab 3: Trial Timeline ── */}
        {activeTab === 3 && (
          <div className={styles.panel}>
            <div className={styles.timeline}>
              <div className={styles.timelineTrack}>
                <div
                  className={styles.timelineFill}
                  style={{ width: `${activeMilestone * 50}%` }}
                />
              </div>
              <div className={styles.timelineSteps}>
                {milestones.map((ms, i) => (
                  <button
                    key={i}
                    className={`${styles.step} ${
                      i <= activeMilestone ? styles.stepReached : ""
                    } ${i === activeMilestone ? styles.stepActive : ""}`}
                    onClick={() => setActiveMilestone(i)}
                  >
                    <span className={styles.stepDot} />
                    <span className={styles.stepDay}>
                      {t(ms.day, lang)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.milestoneInfo}>
              <h3 className={styles.milestoneTitle}>
                {t(milestones[activeMilestone].title, lang)}
              </h3>
              <p className={styles.panelText}>
                {t(milestones[activeMilestone].detail, lang)}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
