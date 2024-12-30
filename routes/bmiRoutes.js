const express = require('express');
const router = express.Router();
const path = require('path');

// Route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/bmiCalculator.html'));
});

// Calculation Logic
router.post('/calculate', (req, res) => {
  const { height, weight, age, gender } = req.body;
  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
  let category;

  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  res.json({ bmi, category, age, gender });
});

module.exports = router;