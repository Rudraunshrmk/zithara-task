const pool = require('../db');

class Data {
    static async getAllData() {
        const query = 'SELECT * FROM data';
        const { rows } = await pool.query(query);
        return rows;
    }
}

module.exports = Data;
