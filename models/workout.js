const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
      },
      type: {
        type: String,
        trim: true,
      },
      weight: {
        type: Number,
        default: 0
      },
      duration: Number,
      weight: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      distance: {
          type: Number,
          default: 0
      },
    //   duration: {
    //       type: Number,
    //       default: 0
    //   }

    
    }
  ],
  
//   totalDuration: {
//     type: Number,
//     default: 0,
//   },


});

WorkoutSchema.methods.getTotalDuration = async function() {
    this.totalDuration = 0;
    this.exercises.forEach(element => {
      this.totalDuration += Number(element.duration);
      //console.log("T DURATE:", this.totalDuration);
    });
  
    return Number(this.totalDuration);
  
  }

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;