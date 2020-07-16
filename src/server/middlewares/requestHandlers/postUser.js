const addQuotes = require("../helpers/addQuotes");
const { client } = require('../../services/pg');


async function postUser(req, res) {
    try {
        const email = addQuotes(req.body.email);
        const name = addQuotes(req.body.name);
        const surname = addQuotes(req.body.surname);
        const pubkey = addQuotes(req.body.pubkey);
        const _privkey = addQuotes(req.body._privkey);
        const avatar_url = addQuotes(req.body.avatar_url);

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