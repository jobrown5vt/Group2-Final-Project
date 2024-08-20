const express = require("express");
const { expressMiddleware } = require('@apollo/server/express4');

const { ApolloServer } = require('@apollo/server');

// Above, we import express from express
// Also, we import ApolloServer and gql from apollo-server-express

const { typeDefs, resolvers } = require("./schemas");

const path = require("path");
const { authMiddleware } = require("./utils/auth");

// Above we require path and our ayth middleware/

const db = require("./config/connection");

// Above, we import our typedefs and resolvers
// Also, we import our db connection

const PORT = process.env.PORT || 3001;

// Above, we specify a port to run on

const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Above we create a new instance of the ApolloServer with our typedefs and resolvers.
// Also, we add context for our user giving the request
const app = express();

// Above we create new instance of express

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }
  // Above,we Serve static files and handle routing in production

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
