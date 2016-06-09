import koa from 'koa'
import serve from 'koa-static'
import kcg from 'koa-conditional-get'
import etag from 'koa-etag'

import routes from './routes'
import { getDistFolder } from './utils'

var app = koa();

app.use(kcg())
app.use(etag())
app.use(serve(getDistFolder(), {gzip: true}));
app.use(routes.routes());

app.listen(3000, function() {
	console.log('app is started');
});