const express = require("express");

const { ApolloServer, gql } = require("apollo-server-express");

// Above, we import express from express
// Also, we import ApolloServer and gql from apollo-server-express

const { typeDefs, resolvers } = require("./schemas");

const db = require("./config/connection");

// Above, we import our typedefs and resolvers
// Also, we import our db connection

const PORT = process.env.PORT || 3001;

// Above, we specify a port to run on

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Above we create a new instance of the ApolloServer with our typedefs and resolvers.

const app = express();

// Above we create new instance of express

const startApolloServer = async () => {
  await server.start();

  // Above we await for our apollo server to start

  server.applyMiddleware({ app, path: "/graphql" });

  // Above, we apply our express instance as  Middleware to our server and specify a path

  app.use(express.urlencoded({ extended: false }));

  app.use(express.json());

  // Above are our custom middleware for our express instance to recieve data

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });

  // Above, is our code to start our express server once our db is open
  // Also , it specifys the port we are on and our route to graphql instance.
};

// Above, is our startApolloServer function that starts our apollo server and instance of express while connecting to the db.

startApolloServer();

// Above we call our StartApolloServer Function
