const express=require('express');
const app=express();
const mongoose = require('mongoose');
const path=require('path');
const seedDB=require('./seed');
const productRoute=require('./routes/ArticleRoutes');
const methodOverride=require('method-override');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use(productRoute);

mongoose.connect('mongodb+srv://cishika104:doraemon1234@cluster0.khhhxjh.mongodb.net/Articles').then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})

seedDB();

app.listen(3000,()=>{
    console.log("Server is running");
})