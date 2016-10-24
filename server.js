import express from 'express';
import { graphql } from 'graphql';
import bodyParser from 'body-parser';
import schema from './graphql/schema';

const PORT = 3000;

express()
  .use(bodyParser.text({ type: 'application/graphql' }))
  .post('/graphql', (req, res) => graphql(schema, req.body)
    .then((result) => console.log(['result'], result) || res.send(JSON.stringify(result, null, 2))))
  .listen(PORT, () => console.log(`Server listening on localhost:${PORT}`));