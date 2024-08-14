const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const highScoreSchema = new Schema({
    highScoreTotal: {
       type: String,
        trim:true,
    },
    highScoreName:{
        type: String,
        required:true,
        trim:true,
    },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const highScore = model('highScore', highScoreSchema);

module.exports = highScore;