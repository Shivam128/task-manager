import React, { useState } from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <TaskProvider>
      <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
        <h1>Task Manager</h1>
        <ThemeToggle />
        <TaskForm />
        <Filter filter={filter} setFilter={setFilter} />
        <TaskList filter={filter} />
      </div>
    </TaskProvider>
  );
}

export default App;
