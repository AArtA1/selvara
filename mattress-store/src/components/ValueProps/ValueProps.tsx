import styles from "./ValueProps.module.css";

const props = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: "365-Night Home Trial",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="6" width="22" height="12" rx="2" />
        <path d="M1 10h22" />
      </svg>
    ),
    label: "Free Delivery & Setup",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 3H1v13h15M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    label: "Free Mattress Removal",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    label: "Lifetime Warranty",
  },
];

export function ValueProps() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.valueProps}>
        {props.map((prop) => (
          <div key={prop.label} className={styles.valueProp}>
            <div className={styles.icon}>{prop.icon}</div>
            <span>{prop.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
