const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: 'exercise field cannot be blank.'
    },
    name: {
      type: String,
      required: 'enter a name for exercise.'
    },
    duration: {
      type: Number
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
    distance: {
      type: Number
    }
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;