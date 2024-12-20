const nodemailer = require("nodemailer");

const sendMail =  async (req, res) => {

    let testAccount = await nodemailer.createTestAccount();
    
    //* Connect with the SMTP 
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'marta68@ethereal.email',
            pass: 'j74dPR4E7RG2kKJYxu'
        }
    });


    let info = await transporter.sendMail({
        from: '"Bhavishaya Khandelwal 👻" <marta68@ethereal.email>', // sender address
        to: "bhavishayakhandelwal@gmail.com, 21cs19ecajmer.ac.in", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

    res.json(info);
};



module.exports.sendMail = sendMail;