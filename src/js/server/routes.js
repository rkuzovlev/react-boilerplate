import koaRouter from 'koa-router'

import dc from './controllers/default'

var router = koaRouter()

router.get('/*', dc.index);

export default router