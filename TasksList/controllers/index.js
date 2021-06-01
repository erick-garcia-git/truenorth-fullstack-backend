const TaskListService = require('../tax-list-service')
const validateParams = require('./validateParams')

module.exports = {
  fetchTasks: async function (req, res) {
    const { quantity } = req.query
    const tasksQuantityToFetch = quantity || 3
    const data = await TaskListService.findTasks(tasksQuantityToFetch)
    if (data.error) {
      return res.status(400).end()
    }
    res.json(data)
  },
  completeTask: async function (req, res) {
    try {
      const params = validateParams(req.body)
      const response = await TaskListService.markTaskAsCompleted(params)
      if (response.error) {
        return res.status(400).json(response)
      }
      return res.json(response)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}