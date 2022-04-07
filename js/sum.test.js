const testPassword = require("./testPassword");

test('adds 1 + 2 to equal 3', () => {
    expect(testPassword(1, 2)).toBe(3);
  });