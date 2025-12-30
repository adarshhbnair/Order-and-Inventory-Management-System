const { Pool } = require("pg");

module.exports = new Pool({
  host: "inventory-db",
  user: "postgres",
  password: "postgres",
  database: "inventory"
});
