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
  const movies = [
    'Inception', 'The Dark Knight', 'Interstellar', 'Titanic', 'Avatar',
    'The Godfather', 'The Shawshank Redemption', 'Pulp Fiction', 'Forrest Gump', 'The Matrix',
    'Fight Club', 'The Lord of the Rings: The Return of the King', 'The Silence of the Lambs',
    'Schindler\'s List', 'The Avengers', 'Iron Man', 'Gladiator', 'The Lion King',
    'Star Wars: A New Hope', 'Jurassic Park', 'The Departed', 'Braveheart', 'Goodfellas',
    'The Prestige', 'Django Unchained', 'The Wolf of Wall Street', 'Saving Private Ryan',
    'Back to the Future', 'The Green Mile', 'The Social Network', 'Black Panther', 'Parasite',
    'Joker', 'Avengers: Endgame', 'Spider-Man: No Way Home', 'Frozen', 'Toy Story', 'Finding Nemo',
    'WALL-E', 'Up', 'Shrek', 'Mad Max: Fury Road', 'The Incredibles', 'Monsters, Inc.',
    'The Hunger Games', 'Twilight', 'Harry Potter and the Sorcerer\'s Stone',
    'The Chronicles of Narnia', 'The Revenant', 'Whiplash', '12 Years a Slave',
    'A Beautiful Mind', 'La La Land'
  ];
  
  const randomMovie = _.sample(movies); // lodash to random

  res.json({ movie: randomMovie });
});

module.exports = router;