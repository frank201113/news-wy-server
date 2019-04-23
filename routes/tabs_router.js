const Router = require('koa-router')
const router = new Router()
const tabs_controller = require('./../controllers/tabs_controller')

router.get('/api/tab', tabs_controller.getTabs)

module.exports = router
