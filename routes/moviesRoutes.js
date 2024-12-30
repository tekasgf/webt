const express = require('express');
const router = express.Router();
const path = require('path');
const _ = require('lodash'); //lodash for random -- 1 npm
const axios = require('axios'); //axios for future API integration -- 2 npm

// Route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/movies.html'));
});

// Recommendation Logic
router.post('/recommend', (req, res) => {
  const movies = ['Inception', 'The Dark Knight', 'Interstellar', 'Titanic', 'Avatar'];
  const randomMovie = _.sample(movies); // lodash to random

  res.json({ movie: randomMovie });
});

module.exports = router;