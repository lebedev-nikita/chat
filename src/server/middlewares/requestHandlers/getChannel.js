const { jsonInQuotesOrNull, strInQuotesOrNull } = require("./helpers");
const { client } = require('../../services/pg');


async function getChannel(req, res) {
    try {
        const channel_id = req.params.channelId;

        const { rows } = await client.query(`
            SELECT * FROM channels WHERE id=${channel_id}
        `);
        res.send(rows[0]);
    } catch(err) {
        console.log(err.stack);
        res.send("Error");
    }
}

module.exports = { getChannel };