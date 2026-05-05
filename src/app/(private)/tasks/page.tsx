"use client";

import styles from "./page.module.css";
import { FormEvent, SubmitEvent, useState } from "react";

import Task from "@/app/components/Task";
import Button from "@/app/components/Button";

interface Task {
  id: number;
  title: string;
  description?: string;
  priority?: "low" | "normal" | "high" | "finished" | null;
  deadline?: Date | null;
}

type PriorityType = "low" | "normal" | "high" | "finished" | null;

export default function Tasks() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idCounter, setIdCounter] = useState(0);
  const [tasks, setTasks] = useState([] as Task[]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: null,
    deadline: null,
  } as Task);

  function handleAddNewTask(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setNewTask({
      ...newTask,
      id: idCounter,
    });
    setTasks([...tasks, { ...newTask, id: idCounter }]);
    setIdCounter(idCounter + 1);
    setModalIsOpen(false);

    setNewTask({
      ...newTask,
      title: "",
      description: "",
      priority: null,
      deadline: null,
    });
  }

  function handleDeleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

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

            <form className={styles.form} onSubmit={(e) => handleAddNewTask(e)}>
              <input
                type="text"
                placeholder="Título"
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    title: e.target.value,
                  })
                }
              />

              <div>
                <select
                  value={newTask.priority || "no"}
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      priority: (e.target.value === "no"
                        ? null
                        : e.target.value) as PriorityType,
                    })
                  }
                >
                  <option value="no">Sem prioridade</option>
                  <option value="low">Prioridade Baixa</option>
                  <option value="normal">Prioridade Normal</option>
                  <option value="high">Prioridade Alta</option>
                </select>

                <input
                  type="date"
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      deadline: e.target.value
                        ? new Date(e.target.value)
                        : null,
                    })
                  }
                ></input>
              </div>

              <textarea
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    description: e.target.value,
                  })
                }
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

          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                title={task.title}
                description={task.description}
                {...(task.priority && { priority: task.priority })}
                {...(task.deadline && { deadline: task.deadline })}
                onDelete={() => handleDeleteTask(task.id)}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
