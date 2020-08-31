// Require packages and set the port
const express = require('express');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const app = express();

const router = require('./utils/routes')

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`New UserInfo: ${userInfo}`);
});

router(app);

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});
