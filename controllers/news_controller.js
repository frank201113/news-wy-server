const New = require('./../models/news')

const getNews = async (ctx, next) => {
  const data = await New.findOne({newsId: '10000'})
	const result = {
		code: 200,
		response: data,
		ts: 12345
	}
	ctx.response.body = result
	return result
}

module.exports = {
  getNews
}
