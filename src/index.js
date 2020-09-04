const express = require('express');
var cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;


const userApi = require('./routes/users');
const userIdApi = require('./routes/id');

app.use(cors())
app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`New UserInfo: ${userInfo}`);
});


userApi(app);
userIdApi(app)

app.listen(port, err => {
  if (err) {
    console.error('Error:', err)
    return
  }
  console.log(`Listen http://localhost:${port}`)
})