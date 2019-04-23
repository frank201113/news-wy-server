// 原创
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExclusiveSchema = new Schema({
	exclusiveId: String,
	headline: [
		{
			title: String,
			newsPic: Array,
			detail: {
				newsTag: String,
        newsSource: String,
        pubtime: String,
				reply: String
			},
			newsType: String			
		}
	],
	qsyk: [
		{
			title: String,
			newsPic: Array,
			detail: {
				newsTag: String,
        newsSource: String,
        pubtime: String,
				reply: String
			},
			newsType: String			
		}
	],
	fd: [
		{
			title: String,
			newsPic: Array,
			detail: {
				newsTag: String,
        newsSource: String,
        pubtime: String,
				reply: String
			},
			newsType: String			
		}
	],
	rj: [
		{
			title: String,
			newsPic: Array,
			detail: {
				newsTag: String,
        newsSource: String,
        pubtime: String,
				reply: String
			},
			newsType: String			
		}
	],
	lc: [
		{
			title: String,
			newsPic: Array,
			detail: {
				newsTag: String,
        newsSource: String,
        pubtime: String,
				reply: String
			},
			newsType: String			
		}
	]  
}, { collection: 'exclusive', versionKey: false })

module.exports = mongoose.model('exclusive', ExclusiveSchema)
