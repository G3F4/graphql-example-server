import express from 'express';
import { graphql } from 'graphql';
import bodyParser from 'body-parser';
import schema from './graphql/schema';

const PORT = 3000;

express()
  .use(bodyParser.text({ type: 'application/graphql' }))
  .get('/', (req, res) => console.log(['GET']) || res.send('Hello'))
  .post('/graphql', (req, res) => console.log(['body'], req.body) || graphql(schema, req.body)
    .then((result) => console.log(['result'], result) || res.json(result)))
  .listen(PORT, () => console.log(`Server listening on localhost:${PORT}`));