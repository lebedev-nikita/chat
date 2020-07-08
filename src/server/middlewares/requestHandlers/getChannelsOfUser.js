const { jsonInQuotesOrNull, strInQuotesOrNull } = require("./helpers");
const { client } = require('../../services/pg');


async function getChannelsOfUser(req, res) {
    try {
        const user_id = req.params.userId;

        const { rows } = await client.query(`
            SELECT c.* FROM user_in_channel uic INNER JOIN channels c
                ON (uic.channel_id = c.id) WHERE user_id=${user_id}
        `);
        
        res.send(rows);
    } catch(err) {
        console.log(err.stack);
        res.send("Error");
    }
}

module.exports = { getChannelsOfUser };