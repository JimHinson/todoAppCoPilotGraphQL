const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Define your schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Define your root resolver
const root = {
  hello: () => {
    return 'Hello, world!';
  },
};

const app = express();

// Set up the GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Server running on http://localhost:4000/graphql'));
