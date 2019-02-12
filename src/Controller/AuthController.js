import Customer from '../models/Customer'

import {
  checkRequiredParameter,
  responseErrorMessage
} from './utilities/validate';

module.exports = (app, db) => {
  app.post('/Customer/login', (request, response) => {
    checkRequiredParameter('login', request, response);
    checkRequiredParameter('password', request, response);

    const data = {
      login: request.body.login,
      password: request.body.password
    };

    Customer.findOne(data, (error, data) => {
      if (error) {
        return responseErrorMessage(error, 400, response);
      }

      if (data === null) {
        return responseErrorMessage('User not found', 404, response);
      }

      response.status(200).send({
        customer: data
      });
    });
  });
};
