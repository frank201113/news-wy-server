const Router = require('koa-router');
const router = new Router();
const user_controller = require('./../controllers/user_controller')

router.post('/api/login', user_controller.login)
router.post('/api/register', user_controller.register)

module.exports = router
