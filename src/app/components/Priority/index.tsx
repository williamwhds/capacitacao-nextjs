import styles from "./page.module.css";

interface PriorityProps {
  type: "low" | "normal" | "high" | "finished";
}

export default function Priority({ type }: PriorityProps) {
  function getPriorityText() {
    switch (type) {
      case "low":
        return "Baixa";
      case "normal":
        return "Normal";
      case "high":
        return "Alta";
      case "finished":
        return "Finalizada";
      default:
        return "Baixa";
    }
  }
  return <span className={styles[type]}>{getPriorityText()}</span>;
}
