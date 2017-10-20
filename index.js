const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const { typeDefs, resolvers } = require("./lib/types");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const PORT = 3002;

const app = express();

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);

app.listen(PORT, () => console.log(`Server started in port ${PORT}`));
