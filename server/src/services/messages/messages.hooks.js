const { authenticate } = require('@feathersjs/authentication').hooks;

const addSenderIdB4MessageCreation = require('../../hooks/add-sender-id-b-4-message-creation');

const addSenderToQueriedMessage = require('../../hooks/add-sender-to-queried-message');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [addSenderIdB4MessageCreation()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [addSenderToQueriedMessage()],
    get: [addSenderToQueriedMessage()],
    create: [addSenderToQueriedMessage()],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
