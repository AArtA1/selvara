import { Container } from "@/components/Container/Container";
import styles from "./ContactGrid.module.css";

const contacts = [
  {
    title: "Call Us",
    detail: "+1 (888) 555-0123",
    hours: "Mon-Sat: 9am - 8pm ET\nSun: 10am - 6pm ET",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    title: "Email Us",
    detail: "support@selvara.com",
    hours: "Response within 24 hours",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "Live Chat",
    detail: "Chat with a sleep consultant",
    hours: "Mon-Fri: 9am - 6pm ET",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

export function ContactGrid() {
  return (
    <section className="section">
      <Container>
        <div className={styles.grid}>
          {contacts.map((c) => (
            <div key={c.title} className={styles.card}>
              <div className={styles.icon}>{c.icon}</div>
              <h3>{c.title}</h3>
              <p className={styles.detail}>{c.detail}</p>
              <p className={styles.hours}>{c.hours}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
