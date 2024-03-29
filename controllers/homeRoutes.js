const router = require('express').Router();
const { User, Exercise, UserExercise } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    console.log('Getting schedule!')
    const userId = req.session.user_id;
  
    if (!userId) {
      res.redirect('/login');
      return;
    }
  
    try {
      const userData = await User.findByPk(userId, {
        include: [
          {
            model: Exercise, through: UserExercise
          }
        ],
      });
      const user = userData.get({ plain: true })
      console.log(user);
      const exerciseData = await Exercise.findAll()
      const exercises = exerciseData.map(exercise => exercise.get({plain: true}))
      console.log(exercises);
      res.render('homepage', {chooseExercises: exercises, exercises: user.Exercises, user, logged_in: req.session.logged_in});
    }
  
    catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  });

  router.get('/schedule', async (req, res) => {
    const exerciseData = await Exercise.findAll()
    const exercises = exerciseData.map(exercise => exercise.get({plain: true}))
    res.render("profile", {exercises})
  })
  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;