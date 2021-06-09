const router = require("express").Router();
const db = require("../models");

// get last workout
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((workout) => {
      res.status(200).json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// workouts in range
router.get("/api/workouts/range", (req, res) => {

    db.Workout.find({}).then(dbWorkout => {

        console.log(dbWorkout);

        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });

});

  
//  add new exersize
router.put("/api/workouts/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    db.Workout.updateOne(
      { _id: id },
      {
        $push: {
          exercises: { ...body },
        },
      }
    )
      .then((workout) => {
        res.status(200).json(workout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });



// new workout
router.post("/api/workouts", ({ body }, res) => {

    db.Workout.create(body).then((dbWorkout => {
        res.json(dbWorkout);
    })).catch(err => {
        res.json(err);
    });
});
  
  module.exports = router;
