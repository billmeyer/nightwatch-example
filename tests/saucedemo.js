var https = require('https');
var SauceLabs = require("saucelabs");

module.exports = {

    '@tags': ['SauceDemo'],

    'Pass 1': function(client) {
        client
            .url('https://www.saucedemo.com')
            .waitForElementVisible('body', 1000)
            .assert.title('Swag Labs');
    },

    afterEach: function(client, done) {
        client.customSauceEnd();

        setTimeout(function() {
            done();
        }, 1000);

    }

};
