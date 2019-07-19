const db = require('../data/db-config.js');

module.exports = {
  get,
  getById,
  create
};

function get() {
  return db('actions');
}

function getById(id) {
  return db('actions')
    .where({ id })
    .first()
    .then(action => {
      if (action) {
        return action;
      } else return null;
    })
    .catch(err => null);
}

async function create(action) {
  const [id] = await db('actions').insert(action);

  return getById(id);
}
