const Ability=require('../models/ability');
class  UserCtl{
    async find(ctx){
        const {phone}=ctx.request.body;
        ctx.body=await Ability.findOne({phone});
    }
    async create(ctx){
        const {name}=ctx.request.body;
        const repeatUser=await Ability.findOne({name});
        if(repeatUser){ctx.throw(409,'文件已经存在')}
        const ability=await new Ability(ctx.request.body).save();
        ctx.body=ability;
    }
    async update(ctx){
        const {phone} =ctx.request.body
        //const Ability=await Ability.findByIdAndUpdate(ctx.params.id,ctx.request.body)
        const ability= await  Ability.findOneAndUpdate({phone},ctx.request.body)
        if(!ability){
            ctx.throw(404,'文件不存在！')
        }
        ctx.body=ability;
    }
    async del(ctx){
        const {phone} =ctx.requst.body;
        const Ability= await Ability.findOneAndRemove({phone});
        if(!Ability){ctx.throw(404,'文件不存在！')}
        ctx.status=204;
    }
};

module.exports=new UserCtl();