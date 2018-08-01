'use strict'
const SES = require('./lib/awsSES');
const transporter = require('./lib/nodeMailer');

module.exports.nodeMailer = (options) => {
  return new Promise((resolve, reject) => {
    return transporter(options).then((res) => {
      return resolve(res);
    }).catch((err) => {
      return reject(err)
    });
  });
}
module.exports.SES = (options) => {
  return new Promise((resolve, reject) => {
    return SES(options).then((res) => {
      return resolve(res);
    }).catch((err) => {
      return reject(err)
    });
  });
}
