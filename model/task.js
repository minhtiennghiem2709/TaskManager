const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide name task"],
    maxLength: [20, "Name must < 20 letters "],
    trim: true,
  },
  complete: { type: Boolean, default: false }
})

module.exports = mongoose.model("Task", taskSchema)