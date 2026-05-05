import styles from "./page.module.css";
import { FiTrash } from "react-icons/fi";
import Priority from "../Priority";
import { useState } from "react";

interface TaskProps {
  title: string;
  description?: string;
  priority?: "low" | "normal" | "high" | "finished" | null;
  deadline?: Date;
  onDelete?: () => void;
}

export default function Task({
  title,
  description,
  priority,
  deadline,
  onDelete,
}: TaskProps) {
  const [isChecked, setIsChecked] = useState(priority === "finished");

  return (
    <>
      <div
        className={`${styles.taskContainer} ${isChecked && styles.finished}`}
      >
        <header>
          <h3>{title}</h3>

          <div className={styles.options}>
            <input
              type="checkbox"
              name=""
              id=""
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <button>
              <FiTrash />
            </button>
          </div>
        </header>

        <div className={styles.taskInfo}>
          {priority && !isChecked ? (
            <Priority type={priority} />
          ) : (
            <Priority type="finished" />
          )}

          {deadline && <p>Prazo: {deadline?.toLocaleDateString()}</p>}
        </div>

        {description && <p className={styles.description}>{description}</p>}
      </div>
    </>
  );
}
