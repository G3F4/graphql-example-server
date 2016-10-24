const express = require('express');

const PORT = 3000;

express()
  .post('/graphql', (req, res) => res.send('Hello!'))
  .listen(PORT, () => console.log(`Server listening on localhost:${PORT}`));