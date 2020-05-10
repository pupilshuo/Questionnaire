const Router=require('koa-router');
const routers=new Router({prefix:"/hhr"});
const {find,create,update,del}=require('../controllers/hhr')
routers.get('/',find);
routers.put('/',update)
routers.post('/',create);
routers.delete('/:id',del);//

module.exports=routers;