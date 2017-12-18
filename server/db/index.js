const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  user: 'tracker',
  password: 'tracker',
  database: 'product_tracker',
  port: 5432,
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
