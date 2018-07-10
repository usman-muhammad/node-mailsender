# node-mailsender

This package return different email sender instance form one package which can be used in application to send email. Currently its support [AWS SES](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html) and [NodeMailer](https://nodemailer.com/about/).
```sh
npm i node-mailsender
npm i -s node-mailsender  // to save as package dependencies
```
## Usage
### Nodemailer configuration
[More Detail about nodemailer](https://nodemailer.com/about/)
```sh
const nodeMailsender = require('node-mailsender');
const options = {
  host: '', //hostname
  port: , //port number,
  secure: true/false,
  auth: {
    user: '', //username
    pass: '' //password
  }
}
nodeMailsender.nodeMailer(options).then((nodeMailer)=> {
    var mailOptions = {
        from: 'FROM MAIL',
        to: 'TO EMAIL',
        subject: 'SUBJECT',
        html: 'HTML'
    };
  nodeMailer.sendMail(mailOptions, (error, info) => {
  });
})
```
### AWS SES configuration
[More about SES configuration](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html)
```sh
const nodeMailsender = require('node-mailsender');
const options = {
    accessKeyId: "ACCESS_KEY",
    secretAccessKey: "SECRET_KEY",
    region: "us-east-1"
}
nodeMailsender.SES(options).then((nodeMailer)=> {
    // method to send mail
})
```
nodeMailsender.nodeMailer(options) and nodeMailsender.SES(options) return Promise which can be used using async await.
## Instalattion requirement
- [Node.js](https://nodejs.org/) >=7.6 to run. IF async and await will be used.

License
----
MIT
