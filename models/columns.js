var mongoose = require('mongoose')

var columnSchema = new mongoose.Schema({
	"columnId": String,
  "columnList": [
    {
      "linkAddress": String,
      "name": String
		}		    
  ]
})

module.exports = mongoose.model('Column', columnSchema)