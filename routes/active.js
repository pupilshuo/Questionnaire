const Router=require('koa-router');
const routers=new Router({prefix:"/active"});
const {find,create,update}=require('../controllers/active')

routers.get('/',find);
routers.post('/',create);
routers.put('/',update);//
module.exports=routers;