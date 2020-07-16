const addQuotes = require("../helpers/addQuotes");
const setPropertiesToId = require('../helpers/setPropertiesToId');
const { client } = require('../../services/pg');


async function getAllUsers(req, res) {
    try {
        const { rows } = await client.query(`
            SELECT * FROM users
        `);
        
        const ret = setPropertiesToId(rows);
        res.send(ret);
    } catch(err) {
        console.log(err.stack);
        res.send("Error");
    }
}

module.exports = { getAllUsers };