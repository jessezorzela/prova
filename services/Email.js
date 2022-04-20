const Email = require('email-templates');

const email = new Email({
    message: {
        from:'j.zorzela4025@edu.faccar.com.br'
    },
    send: true,
    transport: {
        host: 'smtp.mailtrap.io',
        port: 2525,
        ssl:false, 
        tls: true,
        auth: {
            user: "e1363c085f8b38", //usuario MailTrap
            pass: "313e33828c627a" //senha MailTrap
          }
    }
});

module.exports =email