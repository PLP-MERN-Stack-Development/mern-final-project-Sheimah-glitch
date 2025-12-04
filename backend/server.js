const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes (just placeholders)
app.get("/", (req, res) => res.send("Task Manager API Running"));

// Import routes here
// const authRoutes = require("./routes/authRoutes");
// const projectRoutes = require("./routes/projectRoutes");
// const taskRoutes = require("./routes/taskRoutes");
// app.use("/api/auth", authRoutes);
// app.use("/api/projects", projectRoutes);
// app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
