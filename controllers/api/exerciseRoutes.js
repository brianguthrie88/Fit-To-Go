const router = require('express').Router();
const { Exercise } = require('../../models');

// Use as a reference for homeroutes to get all exercises
router.get('/', async (req, res) => {

    const exerciseData = await Exercise.findAll();
    const exercises = exerciseData.map(exercise => exercise.get({plain: true}))
  
    res.status(200).json(exercises)
  })
  
  module.exports = router;