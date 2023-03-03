const mongoose=require('mongoose');
const Article=require('./model/ArtSchema');

const article_dummy=[{
    title:'abcde',
    desc:'Alphabets',
    markdown:'abc'
},{
    title:'abcde',
    desc:'Alphabets',
    markdown:'abc'
},{
    title:'abcde',
    desc:'Alphabets',
    markdown:'abc'
}];

async function seedDB(){
    await Article.deleteMany();
    await Article.insertMany(article_dummy);
    console.log("seeded DB");
}

module.exports=seedDB;