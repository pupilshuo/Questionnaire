const Koa=require('koa');
const parameter=require('koa-parameter');
const koaBodyParser=require('koa-bodyparser');
const koaStatic=require('koa-statics');
const app=new Koa();
const routing= require('./routes');
const error=require('koa-json-error');
const moogoose=require('mongoose');
const {url}=require('./config');
//const MongoClient = require('mongodb').MongoClient;

 
moogoose.connect(url, { useNewUrlParser: true }, ()=> {
console.log("数据库已创建!");});
moogoose.connection.on('error',console.error);
app.use(parameter(app));
app.use(error({
        postFormat(e, {stack, ...rest}) {
            return process.env.NODE_ENV === 'production' ? rest : {stack, ...rest}
        }
}));//错误修正的标准形式
app.use(koaBodyParser())

routing(app);

app.listen(8080,()=>{
    console.log('服务器已经部署')});