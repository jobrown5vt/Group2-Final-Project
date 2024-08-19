const { User, HighScore } = require("../models");

// Above, we import our models





const resolvers = {
 

  Query: {
    users: async () => {
      return await User.find({}).populate("highScore");
    },

    // Above is our users query that returns all users with .find and populates the highscores using "highscore"  name in our schema.
    highScores: async () => {
      return await HighScore.find({}).sort({highScoreTotal:-1});
    },
    // Above, is our highscores query that populates all the highscores in our db.
  },
};

//Above, we create our resolvers with our queries in them.

module.exports = resolvers;
