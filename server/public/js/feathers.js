/* eslint-disable no-undef */

// Socket.io is exposed as the `io` global.
const socket = io();
// @feathersjs/client is exposed as the `feathers` global.
const app = feathers();

// configure websockets
app.configure(feathers.socketio(socket));

//configure authentication
app.configure(feathers.authentication()) ;



