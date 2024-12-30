const express = require('express');
const path = require('path');
const bmiRoutes = require('./routes/bmiRoutes');
const moviesRoutes = require('./routes/moviesRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/bmi', bmiRoutes);
app.use('/movies', moviesRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Combined BMI and Movies Site!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});