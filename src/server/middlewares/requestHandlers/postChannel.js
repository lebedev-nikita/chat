const { jsonInQuotesOrNull, strInQuotesOrNull } = require("./helpers");
const { client } = require('../../services/pg');


async function postChannel(req, res) {
    try {
        const name = strInQuotesOrNull(req.body.name);
        const parent_id = req.body.parent_id || null;
        const _enckey_parent = jsonInQuotesOrNull(req.body._enckey_parent);

        await client.query(`
            INSERT INTO channels (id, name, parent_id, _enckey_parent)
                VALUES(DEFAULT, ${name}, ${parent_id}, ${_enckey_parent})
        `);

        res.send("\nchannel created\n");
    } catch (err) {
        console.log(err.stack);
        res.send("Error");
    }
}

module.exports = { postChannel };