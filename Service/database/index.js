const {Pool, Client} = require("pg")

const pool = new Pool({
  user: 'postgres',
  host: 'database',
  database: 'airbnbcarousel',
  password: 'passwordjustin',
  port: 5432
})


module.exports = pool;