const Router=require('koa-router');
const routers=new Router({prefix:'/risk'});
const {find,create,update}=require('../controllers/risk');
routers.get('/',find);
routers.post('/',create);
routers.put('/',update);
module.exports=routers;
