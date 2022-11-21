// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const isEmpty = require('lodash.isempty');
const { BadRequest } = require('@feathersjs/errors');
// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const {data:{password}}=context;
    console.log(password,(/[a-z]/.test(password)));
    const errors ={};
    if(!/[0-9]/.test(password)){
      errors.withDigits=true;
    }
    if(!/[a-z]/.test(password)){
      errors.withLowercase=true;
    }

    if(!/[A-Z]/.test(password)){
      errors.withUppercase=true;
    }

    if(password.length<8){
      errors.longEnough=true;
    }

    if(!isEmpty(errors)){
      throw new BadRequest('validation-error',{errors});
    }

    return context;
  };
};
