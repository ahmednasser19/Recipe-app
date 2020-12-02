/// crate out schema
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;


// define my schema 
const recipesSchema = new Schema({
    title: {type: String , required: true},
    recipe :{ type:String , required:true }, 
    authorname : {type: String , required : true},
    recipeImage : {type:String , required:true},



})

const Recipes = mongoose.model("Recipes", recipesSchema);

module.exports = Recipes;  
