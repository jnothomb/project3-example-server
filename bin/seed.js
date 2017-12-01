require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');

const Journal = require('../models/Journal').Journal;

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

const journals = [
  {
    title: 'yohoo!',
    content: 'sdssdsdsdsds'
  },
  {
    title: 'fdf!',
    content: 'sdssddfdfdsdsdsds'
  },
  {
    title: 'dfdfd!',
    content: 'dfdfdf'
  },
  {
    title: 'dfdfddf!',
    content: 'fdfdfdf'
  },
  {
    title: '34334!',
    content: '65hggh'
  }
];

Journal.create(journals, (err, result) => {
  if (err) {
    throw err;
  }
  console.log('Event: : ', result);
  mongoose.connection.close();
});
