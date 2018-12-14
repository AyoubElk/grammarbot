const assert = require('assert');
const sinon = require('sinon');
const Client = require('../lib/client');
const helpers = require('../lib/helpers');


const config = {
  base_uri: 'api.grammarbot.io',
  api_key: 'TEST_KEY',
  language: 'en-US',
};
const client = new Client(config);


describe('GrammarBot Client Unit', function() {

  it('Should be a function', function () {
    assert.equal(typeof Client, 'function');
  });

  it('Should be an instance of GrammarBot', function () {
    assert.equal(client instanceof Client, true);
  });

  it('Should have the given properties', function () {
    assert.equal(client.base_uri, config.base_uri);
    assert.equal(client.language, config.language);
    assert.equal(client.api_key, config.api_key);
  });

  it('Should have a check function', function () {
    assert.equal(typeof client.check, 'function');
  });

  it('Should have a checkAsync function', function () {
    assert.equal(typeof client.checkAsync, 'function');
  });

  it('Should call request function once', function (done) {
    const request = sinon.stub(helpers, 'request');
    helpers.request({}, {}, function() {});
    sinon.assert.calledOnce(request);
    sinon.assert.calledWith(request, {});
    done();
  });
});
