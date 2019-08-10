const express = require('express');
const mongoClient = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();

mongoClient.connect('mongodb://localhost:27017/tindevDB', {
    useNewUrlParser: true
});

server.use(cors);
server.use(express.json());
server.use(routes);

server.listen(3333);