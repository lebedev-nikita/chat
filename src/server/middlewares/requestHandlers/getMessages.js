const addQuotes = require("../helpers/addQuotes");
const setPropertiesToId = require('../helpers/setPropertiesToId');
const { client } = require('../../services/pg');


async function getMessages(req, res) {
  try {
    const channel_id = req.query.channel_id;

    const { rows } = await client.query(`
      SELECT * FROM messages WHERE channel_id=${channel_id}
    `);

    const ret = setPropertiesToId(rows);
    res.send(ret);
    
  } catch (err) {
    console.log(err.stack);
    res.send("Error");
  }
}

module.exports = { getMessages };