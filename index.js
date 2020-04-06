const express = require('express');

const app = express();
const helmet = require('helmet');
const bodyParser = require('body-parser');

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = { app };
