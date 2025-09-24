import React from "react";
import { useTasks } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "0.5rem",
        textDecoration: task.completed ? "line-through" : "none",
      }}
    >
      <span onClick={() => toggleTask(task.id)} style={{ cursor: "pointer" }}>
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default React.memo(TaskItem);
