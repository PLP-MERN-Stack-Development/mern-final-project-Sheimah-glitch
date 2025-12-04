import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getTasksByProject, createTask } from "../services/taskservice";
import TaskCard from "../components/taskcard";
import { AuthContext } from "../context/authcontext";

const ProjectDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const loadTasks = () => {
    if(user) getTasksByProject(id, user.token).then(setTasks).catch(console.log);
  };

  useEffect(() => { loadTasks(); }, [id, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!user) return;
    await createTask({ title, description: desc, projectId: id }, user.token);
    setTitle(""); setDesc("");
    loadTasks();
  };

  return (
    <div>
      <h2>Project Tasks</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Task Title" value={title} onChange={e=>setTitle(e.target.value)} /><br />
        <input placeholder="Description" value={desc} onChange={e=>setDesc(e.target.value)} /><br />
        <button type="submit">Add Task</button>
      </form>
      <div>
        {tasks.map(t => <TaskCard key={t._id} task={t} />)}
      </div>
    </div>
  );
};

export default ProjectDetails;
