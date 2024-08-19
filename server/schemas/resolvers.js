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

    user: async (parent, args, context, info) => {
      const { id } = args;

      try {
        const user = await User.findById(id).populate("highScore").exec(); // Replace with your data fetching logic
        // Above, we try and find the user by id

        if (!user) {
          throw new Error("User not found");
        }
        // Above, is our error handeler if a user is not found

        return user;

        // Above we return the user.
      } catch (error) {
        throw new Error(`Failed to fetch user: ${error.message}`);
      }
    },
    // Above is our query to get one user by id and thier highscores as well.
  },

  // Define the functions that will fulfill the mutations
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // Create and return the new School object
      try {
        return await User.create({ username, email, password });
      } catch (error) {
        console.error("Error adding user:", error);
        throw new Error("Failed to add user");
      }
    },
    // Above, is our resolver to add a new user.

    addHighScore: async (parent, { highScoreTotal, highScoreName }) => {
      try {
        // Above, is our create a new high score mutation
        const user = await User.findOne({ username: highScoreName });
        if (!user) {
          throw new Error("User not found");
        }

        const newHighScore = await HighScore.create({
          highScoreTotal,
          highScoreName,
        });

        // Update the user's highScores array
        await User.findOneAndUpdate(
          { username: highScoreName }, // Filter to find the user by username
          { $push: { highScore: newHighScore._id } }, // Push the new high score ID to the user's highScores array
          { new: true } // Option to return the updated user document
        );

        return newHighScore;
      } catch (error) {
        console.error("Error adding high score:", error);
        throw new Error("Failed to add high score");
      }
    },
    // Above is our resolver to add a highscore and attach it to its respective user.

    deleteUser: async (parent, { username }) => {
      try {
        const user = await User.findOne({ username });
        // Above, we find a user by username

        if (!user) {
          throw new Error("User not found");
        }
        // Above is our error to handle if a user is not found

        await HighScore.deleteMany({ _id: { $in: user.highScore } });
        // Above, delete the associated high scores

        const deletedUser = await User.findOneAndDelete({ username });
        //  Above, we find the user by username and delete them

        if (!deletedUser) {
          throw new Error("User not found");
        }
        // Above, is our error to handle if a user is deleted.

        return `User ${username} & highscores successfully deleted.`;
      } catch (error) {
        console.error("Error deleting user & high scores:", error);
        throw new Error("Failed to delete use & high scores");
      }
    },
    // Above is our resolver to delete a user and thier highscores
  },
};

//Above, we create our resolvers with our queries in them.

module.exports = resolvers;
