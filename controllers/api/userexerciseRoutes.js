// TODO: Create, update, delete exercises
const router = require('express').Router();
const { User, Exercise, UserExercise, DayOfWeek, DayOfWeekUserExercise } = require('../../models');
const withAuth = require('../../utils/auth');


// TODO: First get the user by grabbing the id of the user currently logged in (use req.session.user_id)

// TODO: Next, get the exercise chosen by the user on the client side from the request (which should be the req.body.exercise_id)
// router.get('/exercise', withAuth, async (req, res) => {
//     try {
//       const exerciseId = req.body.exercise_id;

//       const exercise = await Exercise.findById(exerciseId);

//       if (!exercise) {
//         return res.status(404).json({ message: "Exercise not found" });
//       }

//       res.status(200).json({ message: "Exercise selection processed successfully" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Server Error" });
//     }
// });

// TODO: Get the day chosen by the user on the client side from the request (which should be the req.body.day_id)
// Route to get the day chosen by the user
// router.get('/dayOfWeek', withAuth, async (req, res) => {
//     try {
//       const dayOfWeekId = req.body.dayOfWeek_id;

//       const day = await DayOfWeek.findById(dayOfWeekId);

//       if (!day) {
//         return res.status(404).json({ message: "Day not found" });
//       }

//       res.status(200).json({ message: "Day chosen successfully" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Server Error" });
//     }
// });

// TODO: Use the UserExercise model to create a new record in the model which inserts the user id and exercise id, store in a variable called userExercise that should have all the data of that new record
// TODO: Use the DayOfTheWeekUserExercise to create a new record in the model which inserts the newly created userExecerise.id and the day id (req.body.day_id)

// Route to create new records in UserExercise and DayOfTheWeekUserExercise models
router.post('/create', withAuth, async (req, res) => {
  try {
    console.log("HELLLO!!!")
    const userId = req.session.user_id;
    const exerciseId = req.body.exercise_id;
    const day = req.body.day

    console.log({ userId, exerciseId, day })

    // Create a new record in UserExercise model
    const userExerciseData = await UserExercise.findOne({ where: { user_id: userId, exercise_id: exerciseId, day } });

    console.log({ userExerciseData })

    if (!userExerciseData) {
      console.log("DAY IS", day)
      const newUserExercise = await UserExercise.create({ user_id: userId, exercise_id: exerciseId, day });
      res.status(200).json(newUserExercise);
      return;
    }

    res.status(200).json("This exercise already exists!");
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// Use as a reference for getting a user and all their exercises on the homeroute
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
})

module.exports = router;