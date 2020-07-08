const { jsonInQuotesOrNull, strInQuotesOrNull } = require("./helpers");
const { client } = require('../../services/pg');


async function getMessages (req, res) {
    try {
        const { rows } = await client.query(`
            SELECT * FROM messages WHERE channel_id=${req.params.channelId}
        `);
        res.send(rows);
    } catch(err) {
        console.log(err.stack);
        res.send("Error");
    }
}

module.exports = { getMessages };