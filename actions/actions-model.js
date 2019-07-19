const db = require('../data/db-config.js');

module.exports = {
  get,
  getById,
  create,
  update,
  remove
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

async function update(updatedAction, id) {
  await db('actions')
    .where({ id })
    .update(updatedAction);

  return getById(id);
}

async function remove(id) {
  const removed = await getById(id);

  await db('actions')
    .where({ id })
    .del();

  return removed;
}
