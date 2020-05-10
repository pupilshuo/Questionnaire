const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const Users=new Schema({
    __v:{type:Number,select:false},
    name:{type:String,required:true},
    password:{type:String,required:true,select:true},
    age:{type:Number,required:true},
    phone:{type:Number,required:true}
    //avatar_url:{type:String},
    //gender:{type:String,enum:['male','female'],default:'male',required:true},//enum是可供选择的东西
    //headline:{type:String},
    //locations:{type:[{type:String}]},//数组的处理
    //employment:{type:[{
      //  company:{type:String},
        //    job:{type:String}
        //}]}//数组的嵌套
});
module.exports=model('Users',Users)