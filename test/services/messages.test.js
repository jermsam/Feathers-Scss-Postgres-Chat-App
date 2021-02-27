const app = require('../../src/app');

describe('\'messages\' service', () => {
  it('registered the service', () => {
    const service = app.service('messages');
    expect(service).toBeTruthy();
  });
});
