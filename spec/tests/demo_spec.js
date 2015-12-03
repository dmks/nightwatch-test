module.exports = {
  'Demo App Home Page' : function (client) {
    client.verifyDemoCode(client.globals.demoCode);

    client.getText('h1.app-title', function(result) {
      client.assert.visible('.demo-introduction', 'Demo Home content visible');
      client.end();
    });
  }
};