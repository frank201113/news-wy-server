const Exclusive = require('./../models/exclusive')

const getExclusive = async (ctx, next) => {
	const data = await Exclusive.findOne({exclusiveId: '10000'})
	const result = {
		code: 200,
		response: data		
	}
	ctx.response.body = result
	return result  
}

module.exports = {
  getExclusive
}
