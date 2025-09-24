import React, { useState, useCallback } from "react";
import { useTasks } from "../context/TaskContext";

const TaskForm = () => {
  const [input, setInput] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!input.trim()) return; // validation
      addTask(input.trim());
      setInput("");
    },
    [input, addTask]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default React.memo(TaskForm);
