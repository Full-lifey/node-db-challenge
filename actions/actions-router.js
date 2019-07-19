const express = require('express');

const Actions = require('./actions-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const actions = await Actions.get();
    res.json(actions);
  } catch (error) {
    res.status(500).json({ message: 'Unable to retrieve actions' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const action = await Actions.getById(req.params.id);
    if (action) res.json(action);
    else
      res.status(404).json({ error: 'could not find action with given id.' });
  } catch (error) {
    res.status(500).json({ message: 'Unable to retrieve action' });
  }
});

router.post('/', async (req, res) => {
  try {
    const action = await Actions.create(req.body);
    res.status(201).json(action);
  } catch (error) {
    res.status(500).json({ message: 'Unable to create action' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const action = await Actions.getById(req.params.id);
    if (action) {
      const updatedAction = await Actions.update(req.body, req.params.id);
      res.json(updatedAction);
    } else {
      res.status(404).json({ error: 'could not find action with given id.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to update action' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Actions.remove(req.params.id);
    if (deleted) {
      res.json({ successfully_deleted: deleted });
    } else {
      res.status(404).json({ message: 'Could not find action with given id' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to delete action' });
  }
});

module.exports = router;
