// 推荐
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecommendSchema = new Schema({
  recommendId: String,
	recommend: [
		{
			title: String,
			newsPic: Array,
			detail: {
        newsSource: String,
        pubtime: String,
				reply: String,
				unlike: String
			},
			newsType: String
		}
	]
}, { collection: 'recommend', versionKey: false })

module.exports = mongoose.model('recommend', RecommendSchema)
