const Router = require('koa-router')
const router = new Router()

const rocommend_controller = require('./../controllers/recommend_controller')

router.get('/api/recommend', rocommend_controller.getRecommend)

module.exports = router
