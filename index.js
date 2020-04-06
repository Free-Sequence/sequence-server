const express = require('express');

const app = express();
const helmet = require('helmet');
const bodyParser = require('body-parser');

// const { setHeaders } = require('./middlewares/setHeaders.middleware');
// const CORSMiddleware = require('./middlewares/CORS.middleware');
// const { limiter } = require('./middlewares/ratelimiter.middleware');

// app.use(CORSMiddleware);
app.use(helmet());
// app.use(setHeaders);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const { login } = require('./routes/login/login.route');

// app.post('/api/login', limiter(100, 15 * 60 * 1000), (req, res) => {
//   login(req, res);
// });

module.exports = { app };
