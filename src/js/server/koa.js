import koa from 'koa'
import serve from 'koa-static'
import kcg from 'koa-conditional-get'
import etag from 'koa-etag'

import session from 'koa-generic-session'
import redisStore from 'koa-redis'

import config from 'config'

import routes from './routes'
import { getDistFolder } from './utils'

var app = koa();

app.use(kcg())
app.use(etag())

app.keys = config.get("keys")

app.use(serve(getDistFolder(), { gzip: true }));

app.use(session({
	store: redisStore(config.get("redis"))
}));

app.use(routes.routes());

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.listen(port, host, function() {
	console.log('app is started on ', host + ":" + port);
});