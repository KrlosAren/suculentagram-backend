const express = require('express');
const db = require('../server/db.json');

function userApi(app) {
    const router = express.Router();
    app.use('/users', router);

    router.get('/', async (req, res, next) => {
        res.json(db);
    },
    );
};

module.exports = userApi;
