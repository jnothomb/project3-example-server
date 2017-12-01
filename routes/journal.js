const express = require('express');
const router = express.Router();
const Journal = require('../models/Journal').Journal;

router.get('/', (req, res, next) => {
  Journal.find({})
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  Journal.findById(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
