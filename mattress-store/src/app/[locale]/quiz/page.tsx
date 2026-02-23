import { Quiz } from "@/components/Quiz/Quiz";

export const metadata = {
  title: "Подбор матраса — Selvara",
  description: "Ответьте на 3 вопроса и узнайте, какой матрас Selvara подойдёт именно вам.",
};

export default function QuizPage() {
  return (
    <main style={{ background: "var(--color-bg-warm)", minHeight: "100vh" }}>
      <Quiz />
    </main>
  );
}
