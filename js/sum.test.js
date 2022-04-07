const testPassword = require("./testPassword");

test('verify if the password is > as 12', () => {
    expect(testPassword("12345678910Aa$")).toBe(true);
    expect(testPassword("123az")).toBe(false);
    expect(testPassword(123456789101112)).toBe(null);
  });
