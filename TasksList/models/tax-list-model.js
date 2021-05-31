'use strict'

const mongoose = require('mongoose')

const taskSchema = require('./schema')

const model = mongoose.model('tasklist', taskSchema)

module.exports = model
