const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const model=require('../models/model');
const Demo=model.Demo;
mongoose.connect('mongodb://localhost:27017/express_demo');  //创建一个数据库连接,mongodb本地默认启动窗口27017
router.get('/add',(req,res,next)=>{
  res.render('add',{
    title:'ExpressMongodb示例-新增',
  })
});
router.post('/add',(req,res,next)=>{
  // console.log(req.body);
  // Model创建一个Entity实体 Entity 可以进行具体的数据库操作
  let demo=new Demo({
    uid:req.body.uid,
    title:req.body.title,
    content:req.body.content
  })
  demo.save(function(err,doc){
    res.redirect('/');  //添加完数据后，重定向到首页
  })
});
router.get('/update',(req,res)=>{
  // 更新的记录在哪？找出来
  var id=req.query.id;
  console.log(id);
  if(id && id!=''){
    Demo.findById(id,function(err,doc){
      res.render('update',{
        title:'修改数据',
        demo:doc
      })
    })
  }

  // 记录就是一个json对象
  // 保存
})
router.post('/update',(req,res)=>{
  // 更新的记录在哪？找出来
  // 记录就是一个json对象
  let demo={
    uid:req.body.uid,
    title:req.body.title,
    content:req.body.content
  }
  let id=req.body.id;
  if(id && id !=''){
    console.log('=======update id'+id);
    Demo.findByIdAndUpdate(id,demo,(err,doc)=>{
      console.log(doc);
      res.redirect('/');
    })
  }
  // 保存
})
router.get('/del',(req,res,next)=>{
  var id=req.query.id
  if(id && id!=''){
    Demo.findByIdAndRemove(id,(err,doc)=>{
      res.redirect('/');
    })
  }
})
router.get('/',(req,res,next)=>{
  Demo.find((err,docs)=>{
    console.log(docs);
    res.render('index',{
      title:'ExpressMongodb示例',
      demos:docs
    })
  })
})
module.exports=router;
