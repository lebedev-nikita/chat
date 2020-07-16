const addQuotes = require("../helpers/addQuotes");
const setPropertiesToId = require('../helpers/setPropertiesToId');
const { client } = require('../../services/pg');


async function getAllChannels(req, res) {
    try {
        const { rows } = await client.query(`
            SELECT * FROM channels
        `);
        
        const ret = setPropertiesToId(rows);
        res.send(ret);
    } catch (err) {
        console.log(err.stack)
        res.send("Error");
    }
}

module.exports = { getAllChannels };