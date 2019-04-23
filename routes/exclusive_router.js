const Router = require('koa-router')
const router = new Router()

const exclusive_controller = require('./../controllers/exclusive_controller')

router.get('/api/exclusive', exclusive_controller.getExclusive)

module.exports = router
