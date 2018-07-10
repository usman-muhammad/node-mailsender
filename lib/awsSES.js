'use strict'

const aws = require('aws-sdk')
module.exports = (options) => {
  return new Promise(async (resolve, reject) => {
    try {
      aws.config(options)
      let ses
      ses = new aws.SES()
      return resolve(ses)
    } catch (e) {
      return reject(e)
    }
  })
}
