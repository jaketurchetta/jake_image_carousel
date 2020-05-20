const {Pool, Client} = require("pg")

const pool = new Pool({
  user: 'jaketurchetta',
  host: 'localhost',
  database: 'airbnbcarousel',
  password: '',
  port: 5432
})


module.exports = pool;