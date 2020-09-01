const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const userApi = require('./routes/users');

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`New UserInfo: ${userInfo}`);
});

userApi(app);

app.listen(port, err => {
  if (err) {
    console.error('Error:', err)
    return
  }
  console.log(`Listen http://localhost:${port}`)
})