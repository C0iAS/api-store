const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hola');
})

app.get('/products', (req, res) => {
  res.json({
    name: 'product1',
    category: 'product category',
    price: '$2000'
  });
})

app.listen(port, () => {
  console.log('Mi port' + port);
});
