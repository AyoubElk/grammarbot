const assert = require('assert');
const sinon = require('sinon');
const Client = require('../lib/client');
const demoResponse = require('./fixtures/response')


describe('GrammarBot Client Integration', function() {
  let callback, check;
  const client = new Client();
  const demoError = "Error: Internal Error: Missing 'text' or 'data' parameter";

  afterEach(function() {
    sinon.restore();
  })

  describe('Function: check', function() {
    beforeEach(function() {
      check = sinon.stub(Client.prototype, 'check');
      callback = sinon.spy();
    });

    it('Should return a correct response', function (done) {
      check.yields(null, demoResponse);
      client.check("I can't remember how to go their", callback);
      sinon.assert.calledWith(callback, null, demoResponse);
      done();
    });

    it('Should throw an error', function (done) {
      check.yields(demoError, null);
      client.check('text', callback);
      sinon.assert.calledWith(callback, demoError, null);
      done();
    });
  })

  describe('Function: checkAsync', function() {
    beforeEach(function() {
      check = sinon.stub(Client.prototype, 'checkAsync');
      callback = sinon.spy();
    });

    it('Should return a correct response', function (done) {
      check.resolves(demoResponse);
      client.checkAsync("I can't remember how to go their")
        .then(function(response) { assert.deepEqual(response, demoResponse); });
      done();
    });

    it('Should throw an error', function (done) {
      check.rejects(demoError);
      client.checkAsync("I can't remember how to go their")
        .catch(function(error) { assert.equal(error, demoError); })
      done();
    });
  })
});
