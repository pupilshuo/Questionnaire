const Router=require('koa-router');
const routers=new Router({prefix:'/ability'});
const {find,create,update}=require('../controllers/ability');
routers.get('/',find);
routers.post('/',create);
routers.put('/',update);
module.exports=routers;
