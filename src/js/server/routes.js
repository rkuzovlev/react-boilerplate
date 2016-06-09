import koaRouter from 'koa-router'

import dc from './controllers/default'

var router = koaRouter()

router.get('/', dc.index);
router.get('/2', dc.index2);

export default router