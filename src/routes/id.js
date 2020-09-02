const express = require('express');
const db = require('../server/db.json');

function userIdApi(app) {
  const router = express.Router();
  app.use('/users/:id', router);


  router.get('/', async (req, res, next) => {
    const userId = req.params.id
    const findUser = db.users.find(user => user.id === userId)
    res.send(findUser)
  })
}

module.exports = userIdApi;
