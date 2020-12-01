const express =require('express'); 
const router = express.Router(); 
/// bring the recipe shcema
const Recipes = require('../models/recipes');
// REQUEST GET ALL recipes
router.get('/', (req,res) => { 
    Recipes.find().then(recipe => res.json(recipe)).catch(err => res.status(400).json(`Error: ${err}`))
});


//REQUEST ADD NEW RECIPE
router.post('/add', (req,res) => {
    const newRecipe = new Recipes({
        // adding tthem  to the schema 
        title : req.body.title, 
        recipe: req.body.recipe, 
        authorname: req.body.authorname

    })

    /// save to mogoDB
    newRecipe.save().then( () => res.json("The new Recipe added successfuly! "))
    .catch(err => res.status(400).json(`Error: ${err}`)); /// catching the error if exited
})

///REQUEST FIND RECIPE BY ID

router.get('/:id', (req,res)=>{
    Recipes.findById(req.params.id).then(recipe => res.json(recipe))
    .catch(err => res.status(400).json(`Error: ${err}`));
})

///REQUEST FIND RECIPE BY ID AND UPDATE 

router.put('/update/:id', (req,res) =>{
    Recipes.findById(req.params.id).then(recipe =>{
        recipe.title = req.body.title;
        recipe.recipe = req.body.recipe;
        recipe.authorname =req.body.authorname;

        /// update
         recipe.save().then(() => res.json("the Recipe is updated successfult!"))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
})


///REQUEST FIND RECIPE BY ID AND DELETE

router.delete('/:id', (req,res) => {
    Recipes.findByIdAndDelete(req.params.id).then( () => res.json("The recipe is deleted"))
    .catch(err => res.status(400).json(`Error: ${err}`));

})


module.exports = router  ;