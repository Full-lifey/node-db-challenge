const db = require('../data/db-config.js');

const Actions = require('../actions/actions-model.js');

module.exports = {
  get,
  getById,
  getActionsByProjectId,
  create
};

function get() {
  return db('projects');
}

// function getById(id) {
//   const projectActions = getActionsByProjectId(id)
//     .then(actions => actions)
//     .catch();
//   console.log(projectActions);
//   return db('projects')
//     .where({ id })
//     .first()
//     .then(project => {
//       if (project) {
//         return { ...project, actions: getActionsByProjectId(id) };
//       } else return null;
//     })
//     .catch(err => null);
// }

async function getById(id) {
  try {
    const projectActions = await getActionsByProjectId(id);
    const project = await db('projects')
      .where({ id })
      .first();
    if (project) {
      return { ...project, actions: projectActions };
    }
  } catch (error) {
    return null;
  }
}

function getActionsByProjectId(id) {
  return db('projects')
    .innerJoin('actions', 'projects.id', 'actions.project_id')
    .where({ 'actions.project_id': id })
    .select(
      'actions.id',
      'actions.description',
      'actions.notes',
      'actions.completed'
    );
}

async function create(project) {
  const [id] = await db('projects').insert(project);

  return getById(id);
}
