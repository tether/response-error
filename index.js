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
  let code = typeof error === 'number'
    ? error
    : error.statusCode
  if (!code) {
    const name = error.name
    if (name === 'ReferenceError') code = 400
    if (name === 'TypeError') code = 400
  }
  status(response, code || 500, error.message)
}
