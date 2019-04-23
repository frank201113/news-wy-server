const Column = require('./../models/columns')

const getColumns = async (ctx, next) => {
  const data = await Column.findOne({columnId: '10000'})
	const result = {
		code: 200,
		response: data,
		ts: 12345
	}
	ctx.response.body = result
	return result
}

module.exports = {
  getColumns
}
