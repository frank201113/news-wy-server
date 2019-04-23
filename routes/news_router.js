const Router = require('koa-router')
const router = new Router()
const news_controller = require('./../controllers/news_controller')

router.get('/api/news', news_controller.getNews)

module.exports = router
