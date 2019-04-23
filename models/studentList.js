var mongoose = require('mongoose')

var studentListSchema = new mongoose.Schema({
  "listId": String,
  "studentList": [
    {
      "name": String,
      "age": Number
    }
  ]
})

module.exports = mongoose.model('StudentList', studentListSchema)
