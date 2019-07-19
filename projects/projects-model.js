const db = require('../data/db-config.js');

module.exports = {
  get,
  getById,
  create
};

function get() {
  return db('projects');
}

function getById(id) {
  return db('projects')
    .where({ id })
    .first()
    .then(project => {
      if (project) {
        return project;
      } else return null;
    })
    .catch(err => null);
}

async function create(project) {
  const [id] = await db('projects').insert(project);
  console.log(id);

  return getById(id);
}
