
const { Pool } = require('pg');

const pool = new Pool({
    user: 'Mehdi',
    host: 'localhost',
    database: 'TaskManager',
    password: 'y123456',
    port: 5432,
});

module.exports = pool;
