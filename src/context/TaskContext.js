import React, { createContext, useContext, useCallback } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = useCallback(
    (title) => {
      setTasks([...tasks, { id: Date.now(), title, completed: false }]);
    },
    [tasks, setTasks]
  );

  const deleteTask = useCallback(
    (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
    [tasks, setTasks]
  );

  const toggleTask = useCallback(
    (id) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    },
    [tasks, setTasks]
  );

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
};
