const mongoose = require('mongoose')
const Schema = mongoose.Schema

const likeSchema = new Schema({
    name: String,
    index: Number
})

module.exports = mongoose.model('Like', likeSchema)