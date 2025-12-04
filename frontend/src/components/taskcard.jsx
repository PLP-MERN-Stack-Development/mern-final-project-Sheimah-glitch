import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "5px 0" }}>
      <h5>{task.title}</h5>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
    </div>
  );
};

export default TaskCard;
