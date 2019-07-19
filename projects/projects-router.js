const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.get();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Unable to retrieve projects' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Projects.getById(req.params.id);
    if (project) res.json(project);
    else
      res.status(404).json({ error: 'could not find project with given id.' });
  } catch (error) {
    res.status(500).json({ message: 'Unable to retrieve project' });
  }
});

router.post('/', async (req, res) => {
  try {
    const project = await Projects.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Unable to create project' });
  }
});

module.exports = router;
