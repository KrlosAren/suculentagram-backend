const express = require('express');
const users = require('../server/db.json');

function userApi(app) {
    const router = express.Router();
    app.use('/users', router);

    router.get('/', async (req, res, next) => {
        res.json(users);
    },
    );
};

module.exports = userApi;
