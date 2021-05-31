const mongoose = require('mongoose')
const TaskListModel = require('./models/tax-list-model')
const fetch = require('node-fetch')
const { ObjectId } = mongoose.Types

module.exports = {
  findTasks: async function (quantity) {
    try {
      const data = await fetch(`https://hipsum.co/api/?type=hipster-latin&paras=${quantity}`)
      let titles = await data.json()
      const titlesCompleted = await TaskListModel.find({ status: 'completed' })
      if (titles && titles.length) {
        titles = titles.map(title => ({ title, id: new ObjectId() }))
      }
      return { titles: titles, titlesCompleted: titlesCompleted }
    } catch (error) {
      console.log('error ', error)
      return { error: true, message: 'Something were wrong fetching titles' }
    }
  },
  markTaskAsCompleted: async ({ id, title }) => {
    const taskAlreadyCompleted = await TaskListModel.findOne({ _id: new ObjectId(id) })
    if (taskAlreadyCompleted) {
      return { error: true, message: 'Task was already completed' }
    }
    const record = new TaskListModel({
      _id: new ObjectId(id),
      title: title,
      status: 'completed'
    })
    let result = await record.save()
    result = result.toObject()
    return { id: result.id, title: result.title }
  }
}