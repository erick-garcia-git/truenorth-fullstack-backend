const mongoose = require('mongoose')

const options = {
  timestamps: true,
  toObject: {
    transform: function (_, ret) {
      ret.id = ret._id.toString()
      delete ret._id
    }
  },
  toJSON: {
    transform: function (_, ret) {
      ret.id = ret._id.toString()
      delete ret._id
    }
  }
}

const schema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  title: {
    type: String
  },
  status: {
    type: String
  }
}, options)

module.exports = schema