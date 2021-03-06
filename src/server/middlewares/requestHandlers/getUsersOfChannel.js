const addQuotes = require("../helpers/addQuotes");
const setPropertiesToId = require('../helpers/setPropertiesToId');
const { client } = require('../../services/pg');


async function getUsersOfChannel(req, res) {
  try {
    const channel_id = req.query.channel_id;
    
    const { rows } = await client.query(`
      SELECT u.* FROM user_in_channel uic INNER JOIN users u
        ON (uic.user_id = u.id) WHERE channel_id=${channel_id}
    `);

    const ret = setPropertiesToId(rows);
    res.send(ret);
    
  } catch (err) {
    console.log(err.stack);
    res.send("Error");
  }
}

module.exports = { getUsersOfChannel };