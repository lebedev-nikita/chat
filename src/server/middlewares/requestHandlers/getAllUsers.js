const { jsonInQuotesOrNull, strInQuotesOrNull } = require("./helpers");
const { client } = require('../../services/pg');


async function getAllUsers(req, res) {
    try {
        const { rows } = await client.query(`
            SELECT * FROM users
        `);
        res.send(rows);
    } catch(err) {
        console.log(err.stack);
        res.send("Error");
    }
}

module.exports = { getAllUsers };