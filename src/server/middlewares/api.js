const { getChannelsOfUser } = require("./requestHandlers/getChannelsOfUser");
const { getUsersOfChannel } = require("./requestHandlers/getUsersOfChannel");
const { postUserInChannel } = require("./requestHandlers/postUserInChannel");
const { getAllChannels } = require("./requestHandlers/getAllChannels");
const { getUser } = require("./requestHandlers/getUser");
const { postUser } = require("./requestHandlers/postUser");
const { getMessages } = require("./requestHandlers/getMessages");
const { postMessage } = require("./requestHandlers/postMessage");
const { getChannel } = require("./requestHandlers/getChannel");
const { postChannel } = require("./requestHandlers/postChannel");
const { getAllUsers } = require("./requestHandlers/getAllUsers");

module.exports = function setupApiRoutes(app) {
  //channels
  app.post('/api/channels', postChannel);
  app.get('/api/channels/', getAllChannels);
  app.get('/api/channels/:channelId', getChannel);

  //messages
  app.post('/api/channels/:channelId/messages', postMessage);
  app.get('/api/channels/:channelId/messages', getMessages);

  //users
  app.post('/api/users', postUser);
  app.get('/api/users', getAllUsers);
  app.get('/api/users/:userId', getUser);

  //user_in_channel
  app.post('/api/channels/:channelId/users/:userId', postUserInChannel);
  app.get('/api/channels/:channelId/users/', getUsersOfChannel);
  app.get('/api/users/:userId/channels/', getChannelsOfUser);
};
