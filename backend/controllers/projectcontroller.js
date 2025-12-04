const Project = require("../models/Project");

// Create Project
exports.createProject = async (req, res) => {
  const { name, description } = req.body;
  try {
    const project = await Project.create({ name, description, owner: req.user._id });
    res.status(201).json(project);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

// Get User Projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ owner: req.user._id });
    res.json(projects);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

// Get Single Project
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if(!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

// Update Project
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(project);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

// Delete Project
exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch (err) { res.status(500).json({ message: err.message }); }
};
