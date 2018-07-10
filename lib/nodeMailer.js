'use strict'

const nodeMailer = require('nodemailer')
// const Path = require('path')
// const Util = require('util')
// const readFile = Util.promisify(Fs.readFile)
// class Mailer {
//   static async renderTemplate (signature, context) {
//     if (this.templateCache[signature]) {
//       return this.templateCache[signature](context)
//     }
//     const filePath = Path.resolve(__dirname, `./templates/${signature}.hbs.md`)
//     const options = { encoding: 'utf-8' }
//     const source = await readFile(filePath, options)
//     this.templateCache[signature] = Handlebars.compile(source)
//     return this.templateCache[signature](context)
//   }
//   static async sendEmail (options, template, context) {
//     const content = await this.renderTemplate(template, context)
//     options = Hoek.applyToDefaults(options, {
//       markdown: content
//     })
//     let result = await this.transport.sendMail(options)
//     return result
//   }
// }
//
// Mailer.templateCache = {}
// Mailer.transport = Nodemailer.createTransport(Config.get('/nodemailer'))
// Mailer.transport.use('compile', Markdown({ useEmbeddedImages: true }))
//
// module.exports = Mailer
module.exports = async (options) => {
  return new Promise(async (resolve, reject) => {
    try {
      let transporter = await nodeMailer.createTransport(options)
      return resolve(transporter)
    } catch (e) {
      return reject(e)
    }
  })
}
