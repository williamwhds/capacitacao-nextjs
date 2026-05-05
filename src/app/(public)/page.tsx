"use client";

import Button from "../components/Button";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  function handleFormSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("tasks");
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <header className={styles.loginHeader}>
          <h1>📋Gestor de Tarefas</h1>
          <p>Insira suas informações de login:</p>
        </header>

        <form
          className={styles.formContainer}
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <input type="text" placeholder="Usuário" className={styles.input} />
          <input type="password" placeholder="Senha" className={styles.input} />
          <Button size="lg" variant="primary" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
