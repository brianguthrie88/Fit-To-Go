const router = require('express').Router();
const userRoutes = require('./userRoutes');
const userExerciseRoutes = require('./userexerciseRoutes');
const exerciseRoutes = require('./exerciseRoutes');

router.use('/users', userRoutes);
router.use('/userExercise', userExerciseRoutes);
router.use('/exercises', exerciseRoutes);

module.exports = router;