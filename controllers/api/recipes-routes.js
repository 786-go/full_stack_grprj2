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