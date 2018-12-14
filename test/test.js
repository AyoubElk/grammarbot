const assert = require('assert');
const sinon = require('sinon');
const Client = require('../lib/client');
const demoResponse = require('./fixtures/response')


describe('GrammarBot Client Integration', function() {
  let check, callback;
  const client = new Client();
  const error = "Error: Internal Error: Missing 'text' or 'data' parameter";

  beforeEach(function(){
    check = sinon.stub(Client.prototype, 'check');
    callback = sinon.spy();
  });

  afterEach(function(){
    sinon.restore();
  })

  it ('Should return a correct response', function (done) {
    check.yields(null, demoResponse);
    client.check("I can't remember how to go their", callback);
    sinon.assert.calledWith(callback, null, demoResponse);
    done();
  });

  it ('Should throw an error', function (done) {
    check.yields(error, null);
    client.check('text', callback);
    sinon.assert.calledWith(callback, error, null);
    done();
  });
});
