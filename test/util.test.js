jest.useFakeTimers();
const isOnline = require('../util');
describe('is-online', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('return true when offline 1', async () => {
    const a = isOnline(4,5);
    expect(a).toBe(9)
  });
});
