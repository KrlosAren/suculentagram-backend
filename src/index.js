// Require packages and set the port
const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const app = express();

const router = require('./utils/routes')

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

router(app)

// Start the server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}...`)
})