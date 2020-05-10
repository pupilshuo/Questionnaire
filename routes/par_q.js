const Router=require('koa-router');
const routers=new Router({prefix:"/par_q"});
const {find,create,update,del}=require('../controllers/par_q')
routers.get('/',find);
routers.put('/', update);//
routers.post('/',create);
routers.delete('/',del);//

module.exports=routers;