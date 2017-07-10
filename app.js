const express=require('express')
const path=require('path')
//body-parser 用于解析客户端请求的body中的内容
const bodyParser=require('body-parser')
const indexRouter=require('./routes/index')
const app=express()    //获得一个express实例
app.set('views',path.join(__dirname,'views'))
// 设置模板引擎
app.set('view engine','ejs')
// app.use() 启用中间件
// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:false
}));
//在根目录下启动路由
app.use('/',indexRouter)
//8080端口监听
app.listen('8080',()=>{
  console.log('服务器启动了')
})
