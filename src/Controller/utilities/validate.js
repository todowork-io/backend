/**
 * The function checks the presence of a parameter in the incoming request.
 * @param {string} parameter
 * @param {function} request
 * @param {function} response
 */
function checkRequiredParameter(parameter, request, response) {
  if (!request.body[parameter]) {
    return response.status(400).send({
      error: `${capitalizeFirstLetter(parameter)} is a required parameter`
    });
  }
}

/**
 * The function changes the first character to capital
 * @param string
 * @returns {string}
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * The function returns an error.
 * @param {string} error
 * @param {number} code
 * @param {function} response
 */
function responseErrorMessage(error, code, response) {
  return response.status(code).send({
    error: error
  });
}

export {
  checkRequiredParameter,
  responseErrorMessage
}
