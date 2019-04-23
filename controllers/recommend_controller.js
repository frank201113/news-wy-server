const Recommend = require('./../models/recommend')

const getRecommend = async (ctx, next) => {
	const data = await Recommend.findOne({recommendId: '10000'})
	const result = {
		code: 200,
		response: data		
	}
	ctx.response.body = result
	return result  
}

module.exports = {
  getRecommend
}
