const router = require('express').Router();
const sequelize = require('../../config/connection');
// const {
//   Router
// } = require('express');
const {
  User,
  Recipes,
  Comment,

} = require('../../models');

// GET all recipes 
router.get('/', async (req, res) => {
  console.log('=============');
  try {
    const recipesData = await Recipes.findAll({
      include: [{
        model: User,
        attributes: ['username'],
      }, ],
    });

    const formattedRecipes = recipesData.map((recipeItem) =>
      recipeItem.get({
        plain: true
      })
    );

    res.render('homepage', {
      formattedRecipes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//   Get 1 recipe
router.get('/:id', async (req, res) => {
  try {
    const recipesData = await Recipes.findByPk(req.params.id, {
      include: [{
        model: User,
        attributes: ['username'],
      }, ],
    });

    const formattedRecipes = recipesData.map((recipeItem) =>
      recipeItem.get({
        plain: true
      })
    );

    res.render('homepage', {
      formattedRecipes,
      // for logged in check
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// Post recipe
router.post('/', async (req, res) => {
  try {
    console.log("TEST MESSAGE LKGSALJGFSDA");
    const newRecipe = await Recipes.create(req.body);

    if (!newRecipe) {
      res
        .status(400)
        .json({
          message: 'Unable to save your recipe. Please try again!'
        });
      return;
    } else {
      res
        .status(200)
        .json({
          user: newRecipe,
          message: 'You created a new recipe!'
        });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})


// Update route
router.put('/:id', (req, res) => {
  //Calls the update method on the Book model
  Recipes.update({
      // All the fields you can update and the data attached to the request body.
      name: req.body.name,
      ingredients: req.body.ingredients,
      directions: req.body.directions,
    }, {
      // Gets a book based on the book_id given in the request parameters
      where: {
        id: req.params.id,
      },
    })
    .then((updatedRecipes) => {
      res.json(updatedRecipes);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});


router.delete('/id', (req, res) => {
  // Looks for the recipes based recipe_id given in the request parameters
  Recipes.destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((deletedRecipe) => {
      res.json(deletedRecipe);
    })
    .catch((err) => res.json(err));
});

module.exports = router