const express = require('express');
const router = express.Router();
const faker = require('faker');

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    users.push({
      name: faker.name.firstName() + '' + faker.name.lastName(),
      Job: faker.name.jobTitle(),
      Amount: faker.finance.amount()
    });
  }
  res.json(users);
});

module.exports = router;
