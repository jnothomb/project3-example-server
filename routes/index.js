const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({welcome: 'project3-example'});
});

module.exports = router;
