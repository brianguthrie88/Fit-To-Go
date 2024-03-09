const router = require('express').Router();
const { User, Exercise } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    console.log('Getting schedule!')
    const userId = req.session.user_id;
  
    if (!userId) {
      res.status(401).json('You must log in to access the schedule')
      return;
    }
  
    try {
      const userData = await User.findByPk(userId, {
        include: [
          {
            all: true,
            group: 'exercise_id'
          }
        ],
      });
      const user = userData.get({ plain: true })
  
      res.status(200).json(user)
    }
  
    catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  });


  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }
  
    res.render('login');
  });

module.exports = router;