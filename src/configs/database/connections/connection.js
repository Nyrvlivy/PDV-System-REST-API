const { Pool } = require("pool");
require("dotenv").config();

const pool = new Pool({});

module.exports = pool;
