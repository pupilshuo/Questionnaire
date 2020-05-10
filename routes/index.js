const fs=require('fs');
const koa=require('koa');
const app=new koa();
module.exports= (app)=>{
    fs.readdirSync(__dirname).forEach((file)=>{
        if (file ==='index.js'){return;}
        else {
    const routers=require(`./${file}`);
    app.use(routers.routes()).use(routers.allowedMethods())};
    })
}