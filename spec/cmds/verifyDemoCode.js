module.exports = {
  "command": function (demoCode) {
    this.url(this.globals.demoDomain)
      .resizeWindow(1000, 800)
      .setValue('.democode-modal input[type="text"]', demoCode)
      .click('.democode-modal button[type="button"]')
      .waitForElementNotPresent('.democode-modal button[type="button"]');

    return this;
  }
}