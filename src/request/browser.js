/**
 * Make a request using `Fetch`.
 *
 * @param   {string}  method
 * @param   {string}  url
 * @param   {string}  body
 * @param   {Object}  headers
 * @returns {Promise}
 */
module.exports = function request (method, url, body, headers) {
    return fetch(url, {
      method, headers, body
    }).then((res) => {
      const {status} = res;
      return res.text().then((body) => {
          return {status, body}
      });
    })
}
