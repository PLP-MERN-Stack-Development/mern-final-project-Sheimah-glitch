import React, { useEffect, useState, useContext } from "react";
import { getProjects, createProject } from "../services/projectservice";
import ProjectCard from "../components/projectcard";
import { AuthContext } from "../context/authcontext";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const { user } = useContext(AuthContext);

  const loadProjects = () => {
    if(user) getProjects(user.token).then(setProjects).catch(console.log);
  };

  useEffect(() => { loadProjects(); }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!user) return;
    await createProject({ name, description: desc }, user.token);
    setName(""); setDesc("");
    loadProjects();
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h2>Create Project</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} /><br />
          <input placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)} /><br />
          <button type="submit">Add Project</button>
        </form>
        <h3>Your Projects:</h3>
        {projects.map(p => <ProjectCard key={p._id} project={p} />)}
      </div>
    </div>
  );
};

export default Dashboard;
