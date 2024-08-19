const { gql } = require('apollo-server-express');

// Above we require gql because we are using apollo-server-express

const typeDefs = gql`

    
    

    type User {
    _id: ID
    username: String
    email: String
    password: String
    highScore: [HighScore]
  }

   type HighScore {
    _id: ID
    highScoreTotal: Int
    highScoreName: String
    createdAt: String
    
  }

  type Query {
    users: [User]
    highScores: [HighScore]
    
  }



`;


// Above are our typedefs.
// Note : type def and resolvers must be made before able to view in graphql

module.exports = typeDefs;
