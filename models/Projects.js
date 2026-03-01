const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: String,
    location: String,
    year: Number
});

module.exports = mongoose.model("Project", ProjectSchema);