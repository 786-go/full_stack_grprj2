const router = require('express').Router();
const {
  User
} = require('../../models/Users'); //ADDED /Users to end of path here on 4/7/2022 and server worked 

// GET /api/users
router.get('/', (req, res) => {
  // query allof the users from the user table
  User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// GET /api/users/1
router.get('/:id', (req, res) => {
  User.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({
          message: 'User not found with this id'
        });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// CREATE new user
// used await together with adding user.create in the const
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      // username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.email = dbUserData.email;
      res.status(200).json(dbUserData);
    });
    // adding a .then here caused code to break
    // .then(dbUserData => res.json(dbUserData))
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




// Put
router.put('/:id', (req, res) => {
  // expect {username: 'name', email: 'email@email.com', password: 'password1234'}
  User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({
          message: 'No user found'
        });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({
          message: 'Incorrect email or password. Please try again!'
        });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({
          message: 'Incorrect email or password. Please try again!'
        });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({
          user: dbUserData,
          message: 'You are now logged in!'
        });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;