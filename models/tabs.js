var mongoose = require('mongoose')

var tabSchema = new mongoose.Schema({
	"tabId": String,
  "tabList": [
    {
      "linkAddress": String,
      "name": String
		},		    
  ]
})

module.exports = mongoose.model('Tab', tabSchema)
