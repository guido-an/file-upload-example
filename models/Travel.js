const mongoose = require('mongoose')
const { Schema, model } = mongoose

const travelSchema = new Schema(
  {
    location: String,
    imageUrl: String
  },
  {
    timestamps: true
  }
)

module.exports = model('Travel', travelSchema)
