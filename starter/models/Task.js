const mongoose = require("mongoose")

// Schema - the structure of the document
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
})

// Model - wrapper for the schema. An interface.
module.exports = mongoose.model("Task", TaskSchema)
