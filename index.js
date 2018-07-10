'use strict'
const SES = require('./lib/awsSES');
const transporter = require('./lib/nodeMailer');

module.exports.nodeMailer = async (options) => {
return await transporter(options)
}
module.exports.SES = async (options) => {
return await SES(options)
}
