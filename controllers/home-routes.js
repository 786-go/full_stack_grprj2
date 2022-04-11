const router = require('express').Router();
const sequelize = require('../config/connection');
const {
  Comment,
  // Post - change to Recipes
  Recipes,
  User,
  Users
} = require('../models');
const {
  route
} = require('./api');

// get posts for homepage
router.get('/', (req, res) => {
  console.log('calling the homepage');
  Recipes.findAll({
      attributes: [
        'id',
        // 'post_url',
        'name',
        // 'created_at', - this is for timestamps
        // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
      ],
      include: [{
          model: Comment,
          attributes: ['id', 'comment_text', 'recipes_id', 'user_id'],
          include: {
            model: User,
            attributes: ['email']
          }
        },
        {
          model: User,
          attributes: ['email']
        }
      ]
    })
    .then(dbPostData => {
      // send a single post to test the homepage template
      console.log(dbPostData[0]);
      // loop over and map Sequelize objects into serialized version of itself
      // results in new posts array
      const posts = dbPostData.map(post => post.get({
        plain: true
      }));
      // render the posts above - use helpers in homepage.handlebars to loop through array
      res.render('homepage', {
        posts
      });

      // res.render('homepage', {
      //   posts,
      //   loggedIn: req.session.loggedIn
      // });
      // above is the code for posts, below is to test the post route
      // res.render('homepage', dbPostData[0].get {
      //     {
      //       plain: true
      //     });
      // })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});




// router.get('/', (req, res) => {
//   // render the homepage.hbs
//   res.render('homepage', {
//     id: 1,
//     post_url: 'https://handlebarsjs.com/guide/',
//     title: 'Handlebars Docs',
//     created_at: new Date(),
//     vote_count: 10,
//     comments: [{}, {}],
//     user: {
//       username: 'test_user'
//     }
//   });
// });

router.get("/login", (req, res) => {
  res.render("login");
});

// example code from Module 14.1
// get single post 
router.get('/recipes/:id', (req, res) => {
  const post = {
    id: 1,
    post_url: 'https://handlebarsjs.com/guide/',
    title: 'Handlebars Docs',
    created_at: new Date(),
    vote_count: 10,
    comments: [{}, {}],
    user: {
      username: 'test_user'
    }
  };

  // find recipe by the id/primary key
  Recipes.findByPk(req.params.id).then(recipeData => {
    const recipe = recipeData.get({
      plain: true
    })
    res.render('recipe', {
      // send data through middleware
      recipe
    })



  });
});

// router.get('/', (req, res) => {
//   // render the homepage.hbs
//   res.render('homepage', {
//     id: 1,
//     post_url: 'https://handlebarsjs.com/guide/',
//     title: 'Handlebars Docs',
//     created_at: new Date(),
//     vote_count: 10,
//     comments: [{}, {}],
//     user: {
//       username: 'test_user'
//     }


//   });
// });

// router.get("/", (req, res) => {
//   res.render("../views/testviews.hbs", {
//     title: "Recipes"
//   });
// });

module.exports = router;