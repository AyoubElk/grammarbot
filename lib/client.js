const http = require('http');
const qs = require('qs');
const util = require('util');

const BASE_URI = 'api.grammarbot.io';


/**
 * Initializes the Grammarbot client
 *
 * @param {object} config Configuration params
 * @param {string} config.api_key API Key
 * @param {string} config.language Text Language (defaults to en-US)
 * @param {string} config.base_uri Configuration params
 */
function GrammarBot(config) {
  config = config || {};

  this.base_uri = config.base_uri   || BASE_URI;        // eslint-disable-line no-multi-spaces
  this.language = config.language   || 'en-US';         // eslint-disable-line no-multi-spaces
  this.api_key = config.api_key     || 'node-default';  // eslint-disable-line no-multi-spaces
}


/**
 * Checks the provided text for grammatical errors
 *
 * @param {string} text Text to check
 * @param {function} done Callback
 */
GrammarBot.prototype.check = function(text, done) {
  const reqParams = qs.stringify({
    'language': this.language,
    'api-key': this.api_key,
    'text': text,
  });

  const reqOptions = {
    host: this.base_uri,
    path: '/v2/check',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const request = http.request(reqOptions, function(response) {
    let body = '';

    response.on('data', function (chunk) { body += chunk });
    response.on('end', function () {
      try {
        return done(null, JSON.parse(body));
      } catch (error) {
        return done(body, null);
      }
    });
  });

  request.write(reqParams);
  request.end();
};


/**
 * Checks the provided text for grammatical errors
 *
 * @param {string} text Text to check
 * @returns {Promise} promise
 */
GrammarBot.prototype.checkAsync = util.promisify(GrammarBot.prototype.check);


module.exports = GrammarBot;
