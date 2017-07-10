// 引用mongoose模块
const mongoose=require('mongoose');
// schema 一种以文件形式(JSON key->value形式)存储的数据库模型骨架，不具备数据库的操作能力
var Schema=mongoose.Schema;
//定义一个Schema 包括四个属性： uid (用户id)/ title(内容标题) / content(发布内容) / createTime(发布时间)
var demoSchema=new Schema({
  uid:String,
  title:String,
  content:String,
  createTime:{
    type:Date,
    default:Date.now
  }
})
 // 模块化输出由schema发布生成的model
exports.Demo=mongoose.model('demo',demoSchema,'demo');
