const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend running");
})

app.listen(PORT, () => console.log("Server running on port", PORT));

const mongoose = require("mongoose");

mongoose.connect("MONGODB_CONNECTION_STRING")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const Projects = require("./models/Project");

app.get("/projects", async (req, res) => {
    const projects = await Projects.find();
    res.json(projects);
});

app.post("/projects", async (req,res) => {
    const newProject = new Projects(req.body);
    await newProject.save();
    res.json(newProject);
})
