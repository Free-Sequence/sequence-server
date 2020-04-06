// package used to read the .env file
const dotenv = require('dotenv');

// Calling the config function will add the content to the process.env object
const result = dotenv.config();

const http = require('http');
const { app } = require('./index');

// port number on which the server listens
const port = process.env.PORT;

// assign the port number
app.set('port', port);

if (process.env.NODE_ENV === 'production') {
  // if the server is behind proxy, it needs to trusted to get the session cookies
  app.set('trust proxy', 1);
}

// create the http server and top it with express.
const server = http.createServer(app);

// make server listen to the incoming requests.
server.listen(port);

function onError(error) {
  if (error.syscall !== 'listen') throw error;

  const bind = typeof port === 'string' ? `Pipe${port}` : `Port${port}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} needs extra privilages`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      console.log('Error while starting the server ', error.code);
      throw error;
  }
}

function onListening() {
  console.log('Server listening on', process.env.PORT);
}

if (result.error) onError(result.error);

// Catch if there is any error.
server.on('error', onError);

// Let us know when the server is listening.
server.on('listening', onListening);
