const { jsonInQuotesOrNull, strInQuotesOrNull } = require("./helpers");
const { client } = require('../../services/pg');


async function getUser(req, res) {
    try {
        const id = req.params.userId;
        
        const { rows } = await client.query(`
            SELECT * FROM users WHERE id=${id}
        `);

        res.send(rows[0]);
    } catch (err) {
        console.log(err.stack);
        res.send("Error");
    }
}

module.exports = { getUser };
