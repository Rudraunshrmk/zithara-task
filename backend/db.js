const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test',
    password: 'postgres',
    port: 5432,
});

pool.on('connect', () => {
    // console.log('Connected to the PostgreSQL database');
});

pool.on('error', (err) => {
    console.error('Error connecting to the PostgreSQL database:', err.message);
});

module.exports = pool;
