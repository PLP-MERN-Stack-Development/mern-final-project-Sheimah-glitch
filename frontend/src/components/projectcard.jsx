import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <Link to={`/project/${project._id}`}>View Tasks</Link>
    </div>
  );
};

export default ProjectCard;
