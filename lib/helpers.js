const http = require('http');


/**
 * Make an HTTP Request
 *
 * @param {object} options
 * @param {object} params
 * @param {callback} done
 */
function request(options, params, done) {
  const request = http.request(options, function(response) {
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

  request.write(params);
  request.end();
}

module.exports = {
  request,
};
