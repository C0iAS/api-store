const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const { logErrors, errorHandler, boomErrorHandler } = require('./midlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


const whitelist = ['http://localhost:5500', 'http://127.0.0.1:5500', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin) {
      callback(null, true);
    }else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

routerApi(app);

app.get('/', (req, res) => {
  res.send('hola');
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  //console.log('Mi port' + port);
});

module.exports = routerApi;
