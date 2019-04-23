const Koa = require('koa');
import mongoose from 'mongoose'
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const config = require('./config')

const app = new Koa()

// https://mongoosejs.com/docs/deprecations.html
// https://stackoverflow.com/questions/51960171/node63208-deprecationwarning-collection-ensureindex-is-deprecated-use-creat
const db = mongoose.connect(config.db, {useNewUrlParser: true, useCreateIndex: true})

// 处理跨域的配置
app.use(cors({
	exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
	maxAge: 100,
	credentials: true,
	allowMethods: ['GET', 'POST', 'OPTIONS'],
	allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
}));
app.use(bodyParser())

const tabs_router = require('./routes/tabs_router')
const columns_router = require('./routes/columns_router')
const user_router = require('./routes/user_router')
const news_router = require('./routes/news_router')
const recommend_router = require('./routes/recommend_router')
const exclusive_router = require('./routes/exclusive_router')

app.use(tabs_router.routes()).use(tabs_router.allowedMethods())
app.use(columns_router.routes()).use(columns_router.allowedMethods())
app.use(user_router.routes()).use(user_router.allowedMethods())
app.use(news_router.routes()).use(news_router.allowedMethods())
app.use(recommend_router.routes()).use(recommend_router.allowedMethods())
app.use(exclusive_router.routes()).use(exclusive_router.allowedMethods())

app.listen(config.port)
console.log('app started at port 9000...')
