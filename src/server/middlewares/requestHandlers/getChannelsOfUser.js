const addQuotes = require("../helpers/addQuotes");
const setPropertiesToId = require('../helpers/setPropertiesToId');
const { client } = require('../../services/pg');


async function getChannelsOfUser(req, res) {
  try {
    const user_id = req.params.userId;

    const { rows } = await client.query(`
      SELECT c.* FROM user_in_channel uic INNER JOIN channels c
        ON (uic.channel_id = c.id) WHERE user_id=${user_id}
    `);

    const ret = setPropertiesToId(rows);
    res.send(ret);
    
  } catch (err) {
    console.log(err.stack);
    res.send("Error");
  }
}

module.exports = { getChannelsOfUser };