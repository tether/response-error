/**
 * Dependencies.
 */

const status = require('response-status')


/**
 * Send status code to HTTP response.
 *
 * @param {Stream} response
 * @param {Error} error
 * @api public
 */

module.exports = function (response, error) {
  let code = error.statusCode
  const name = error.name
  if (!code) {
    if (name === 'ReferenceError') code = 400
    if (name === 'TypeError') code = 400
  }
  status(response, code || 500, error.message)
}
