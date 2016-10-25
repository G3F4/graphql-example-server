import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql/schema';

const PORT = 3000;

express()
  .use('/graphql', graphqlHTTP({ schema, graphiql: true }))
  .get('/', (req, res) => console.log(['GET']) || res.send('Hello'))
  .listen(PORT, () => console.log(`Server listening on localhost:${PORT}`));