const express = require('express');
const db = require('../server/db.json');

function userIdApi(app) {

  app.get('/users/:userId', (req, res) => {
    return res.send(
      db.users.find( user => {
        return user.id === req.params.userId
      })
    );
});

}

module.exports = userIdApi;
