import React, { useMemo } from "react";
import TaskItem from "./TaskItem";
import { useTasks } from "../context/TaskContext";

const TaskList = ({ filter }) => {
  const { tasks } = useTasks();

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "completed":
        return tasks.filter((task) => task.completed);
      case "pending":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  return (
    <div>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      {filteredTasks.length === 0 && <p>No tasks found.</p>}
    </div>
  );
};

export default React.memo(TaskList);
