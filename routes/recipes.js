const express =require('express'); 
const router = express.Router(); 
/// bring the recipe shcema
const Recipes = require('../models/recipes');

router.get('/', (req,res) => { 
    Recipes.find().then(recipe => res.json(recipe)).catch(err => res.status(400).res.json(`Error: ${err}`))
});

module.exports = router  ;