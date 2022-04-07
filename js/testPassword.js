function testPassword(str) {
    if (str.length >= 12 && typeof str === "string") {
        return true;
    } else if (str.length < 12) {
        return false;
    } else {
        return null;
    }
  }
  module.exports = testPassword;