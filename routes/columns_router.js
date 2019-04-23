const Router = require('koa-router')
const router = new Router()
const columns_controller = require('./../controllers/columns_controller')

router.get('/api/column', columns_controller.getColumns)

module.exports = router
