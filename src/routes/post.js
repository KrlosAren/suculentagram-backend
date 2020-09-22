const express = require('express');
const db = require('../server/db.json');

function postApi(app) {
  app.get('/users/:userId/post/:postId', (req, res) => {
    console.log(req.params)
    const user = db.users.find( user => user.id === req.params.userId)
    console.log(user)
    return res.send(
      user.posts.find( postUser => {
        return postUser.id === req.params.postId
      })
    );
  });
}


module.exports = postApi;
