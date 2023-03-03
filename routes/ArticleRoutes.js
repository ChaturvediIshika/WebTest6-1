const express=require('express');
const router=express.Router();
const Article=require('../model/ArtSchema');



router.get('/',async(req,res)=>{
    const articles=await Article.find();
    res.render('index',{articles});
})

router.get('/new',(req,res)=>{
    res.render('new');
})

router.post('/',async(req,res)=>{
    const {title,desc,markdown}=req.body;
    await Article.create({title,desc,markdown});
    res.redirect('/');
})

router.get('/:articleid',async(req,res)=>{
    const {articleid}=req.params;
    const article=await Article.findById(articleid);
    res.render('show',{article});
})

router.get('/:articleid/edit',async(req,res)=>{
    const {articleid}=req.params;
    const article=await Article.findById(articleid);
    res.render('edit',{article});
})

router.patch('/:articleid',async(req,res)=>{
    const {articleid}=req.params;
    const {title,desc,markdown}=req.body;
    await Article.findByIdAndUpdate(articleid,{title,desc,markdown});
    res.redirect(`/${articleid}`);
})

router.delete('/:articleid',async(req,res)=>{
    const {articleid}=req.params;
    await Article.findByIdAndDelete(articleid);
    res.redirect('/');
})

module.exports=router;