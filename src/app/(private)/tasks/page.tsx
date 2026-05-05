"use client";

import Task from "@/app/components/Task";
import Button from "@/app/components/Button";
import styles from "./page.module.css";
import { useState } from "react";

export default function Tasks() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      {modalIsOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <header>
              <h2>Nova Tarefa</h2>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setModalIsOpen(false)}
              >
                X
              </Button>
            </header>

            <form className={styles.form}>
              <input type="text" placeholder="Título" />

              <div>
                <select name="" id="">
                  <option value="">Sem prioridade</option>
                  <option value="">Prioridade Baixa</option>
                  <option value="">Prioridade Normal</option>
                  <option value="">Prioridade Alta</option>
                </select>

                <input type="date" name="" id=""></input>
              </div>

              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Descrição"
              ></textarea>

              <Button size="lg" variant="primary">
                Adicionar
              </Button>
            </form>
          </div>
        </div>
      )}
      <div className={styles.container}>
        <p>Bem-vindo, usuário</p>

        <header className={styles.header}>
          <h1>Tarefas</h1>
          <Button
            size="md"
            variant="secondary"
            onClick={() => setModalIsOpen(true)}
          >
            + Nova tarefa
          </Button>
        </header>

        <main className={styles.main}>
          <Task
            title="Título 01"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
            deadline={new Date()}
            priority="low"
          />
        </main>
      </div>
    </>
  );
}
