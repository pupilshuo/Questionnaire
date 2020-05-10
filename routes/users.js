const jwt=require('koa-jwt');
const Router=require('koa-router');
const routers=new Router({prefix:"/users"});
const {find,create,update,del,login}=require('../controllers/users')
routers.get('/',find);
routers.patch('/:id', update);//
routers.post('/',create);
routers.delete('/:id',del);//
routers.post('/login',login);
module.exports=routers;