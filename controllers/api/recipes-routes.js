const router = require('express').Router();
const { User, Recipes } = require('../models');

// GET all recipes 
router.get('/', async (req, res) => {
    try {
      const recipesData = await Recipes.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
      const formattedRecipes = recipesData.map((recipeItem) =>
        recipeItem.get({ plain: true })
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
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
      const formattedRecipes = recipesData.map((recipeItem) =>
        recipeItem.get({ plain: true })
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


  
//Post
router.post('/', async (req, res) => {
    try {
      const newRecipe = await Recipes.create(req.body);
  
      if (!newRecipe) {
        res
          .status(400)
          .json({ message: 'Unable to save your recipe. Please try again!' });
        return;
      }else{
        res
        .status(200)
        .json({ user: newRecipe, message: 'You created a new recipe!' });
      }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    })