require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  email: process.env.EMAIL,
  email2: process.env.EMAIL_2,
  emailPassword: process.env.EMAIL_PASSWORD,
}

module.exports = { config };
