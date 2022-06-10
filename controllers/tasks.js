const Task = require("../model/task")
const getAllTasks = (req, res) => {
  res.send("All task")
}

const getTask = (req, res) => {
  res.json({ id: req.params.id })
}
const createTask = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
}
const updateTask = (req, res) => {
  res.send("Update")
}
const deleteTask = (req, res) => {
  res.send("Delete")
}

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
}
