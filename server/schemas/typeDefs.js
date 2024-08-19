const { gql } = require("apollo-server-express");

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

  # Above, defines our Schema

  type Query {
    users: [User]
    highScores: [HighScore]
    user(id: ID!): User
  }

  # Above, defines our queries

  type Mutation {
    # Set the required fields for new schools
    addUser(username: String!, email: String!, password: String!): User
    addHighScore(highScoreTotal: String!, highScoreName: String!): HighScore
    deleteUser(username: String!): String
  }
  # Above, defines which mutations the client is allowed to make
`;

// Above are our typedefs.
// Note : type def and resolvers must be made before able to view in graphql

module.exports = typeDefs;
