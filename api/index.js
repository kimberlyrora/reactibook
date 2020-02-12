const express = require('express');
const app = express();

const { config } = require('./config/index');

const postsApi = require('./routes/posts.js');

const { 
  logErrors, 
  wrapErrors,
  errorHandler 
} = require('./utils/middleware/errorHandlers');

const notFoundHandler =  require('./utils/middleware/notFoundHandler');

//body parser
app.use(express.json());

postsApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`listening http://localhost:${config.port}`);
});