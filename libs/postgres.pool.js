const { Pool } = require('pg');

const { config } = require('./../config/config');

const options = {
  connectionString: config.dbUrl
};

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const pool = new Pool(options);

module.exports = pool;
