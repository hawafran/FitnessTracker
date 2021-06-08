const router = require("express").Router();
const db = require("../models");

// get workouts
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
