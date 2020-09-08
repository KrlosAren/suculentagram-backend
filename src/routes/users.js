const express = require('express');
const db = require('../server/db.json');

function userApi(app) {

    app.get('/users', (req, res) => {
        return res.send(
            db.users
        )
    })
}

module.exports = userApi;
