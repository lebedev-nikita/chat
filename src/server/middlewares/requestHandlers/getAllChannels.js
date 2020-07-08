const { jsonInQuotesOrNull, strInQuotesOrNull } = require("./helpers");
const { client } = require('../../services/pg');


async function getAllChannels(req, res) {
    try {
        const { rows } = await client.query(`
            SELECT * FROM channels
        `);
        res.send(rows);
    } catch (err) {
        console.log(err.stack)
        res.send("Error");
    }
}

module.exports = { getAllChannels };