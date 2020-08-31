const db = require('../server/db.json')

const router = app => {
  app.get('/users', (request, response) => {
      response.send(db);
  });
}

module.exports = router