const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  // throw new Error('sdsdsd');
  res.json({ welcome: 'project3-example' });
});

module.exports = router;
