const express = require('express');
const db = require('../server/db.json');
const { json } = require('body-parser');

function userIdApi(app) {
  const router = express.Router();
  app.use('/users/:id', router);


  router.get('/', async (req, res, next) => {
    const userId = req.params.id
    const findUser = db.users.find( user => user.id === userId)
    console.log(userId)
    res.status(201).send({
      user: json(findUser)
    })
  })
}

module.exports = userIdApi;
