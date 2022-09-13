const mongoose = require("mongoose")

// Schema - the structure of the document
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

// Model - wrapper for the schema. An interface.
module.exports = mongoose.model("Task", TaskSchema)
