const Tab = require('./../models/tabs')

const getTabs = async (ctx, next) => {
  let val = null
	const data = await Tab.findOne({tabId: '10000'})
	// console.log('data', data)
	const result = {
		code:200,
		response: data,
		ts: 12345
	}
	ctx.response.body = result
	return result
}

module.exports = {
  getTabs
}
