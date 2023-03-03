const mongoose=require('mongoose');

const ArtSchema=new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        // required:true
    },
    desc:{
        type:String,
        trim:true,
        // required:true  
    },
    markdown:{
        type:String,
        trim:true
    }
});

const article=mongoose.model('Article',ArtSchema);
module.exports=article;