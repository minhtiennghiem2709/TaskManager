const Task = require("../model/task")
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getTask = async (req, res) => {
  try {
    const { id: taskid } = req.params
    const task = await Task.findOne({ _id: taskid })
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const updateTask = async (req, res) => {
  try {
    const { id: taskid } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskid }, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const deleteTask = async (req, res) => {
  try {
    const { id: taskid } = req.params
    const task = await Task.findOneAndDelete({ _id: taskid })
    res.status(200).json({ task: null, message: "successfully" })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
}
