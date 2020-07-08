const { jsonInQuotesOrNull, strInQuotesOrNull } = require("./helpers");
const { client } = require('../../services/pg');


async function postUser(req, res) {
    try {
        const email = strInQuotesOrNull(req.body.email);
        const name = strInQuotesOrNull(req.body.name);
        const surname = strInQuotesOrNull(req.body.surname);
        const pubkey = jsonInQuotesOrNull(req.body.pubkey);
        const _privkey = jsonInQuotesOrNull(req.body._privkey);
        const avatar_url = strInQuotesOrNull(req.body.avatar_url);

        await client.query(`
            INSERT INTO users (id, email, name, surname, pubkey, _privkey, avatar_url)
                VALUES(DEFAULT, ${email}, ${name}, ${surname}, ${pubkey}, ${_privkey}, ${avatar_url})
        `);

        res.send("\nuser created\n");
    } catch (err) {
        console.log(err.stack)
        res.send("Error");
    }
}

module.exports = { postUser };