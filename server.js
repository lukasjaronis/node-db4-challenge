const express = require('express');
const server = express();
const recipesRouter = require('./recipes/recipes-router');

server.use(express.json());
server.use('/api/recipes', recipesRouter);

server.get('/', (request, response) => {
    response.status(200).send(`<h1>Recipe Book API is ONLINE.</h1>`)
})

module.exports = server;