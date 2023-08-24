/** Database setup for BizTime. */
const { Client } = require('pg');

const DB_USER = 'your_username';
const DB_PASSWORD = 'your_password';

const DB_URI = process.env.NODE_ENV === 'test'
  ? 'postgresql://localhost/biztime_test'
  : `postgresql://${DB_USER}:${DB_PASSWORD}@localhost/biztime`;

const client = new Client({
  connectionString: DB_URI
});

client.connect();

module.exports = client;
