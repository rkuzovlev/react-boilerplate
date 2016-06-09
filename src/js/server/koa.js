import koa from 'koa'
import routes from './routes'
import { getDistFolder } from './utils'
import serve from 'koa-static'

var app = koa();

app.use(serve(getDistFolder(), {gzip: true}));
app.use(routes.routes());

app.listen(3000, function() {
	console.log('app is started');
});