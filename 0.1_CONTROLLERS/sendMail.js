const nodemailer = require("nodemailer");


const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();


    //* Connect with the SMTP 
    let transporter = await nodemailer.createTransport({
        host : "smtp.ethereal.email", 
        port : 587, 
        secure : false, 
        auth : {
            user: 'dewitt88@ethereal.email',
            pass: 'DPEDyD59rnwtZZRAQS'
        },
    });

    let info = await transporter.sendMail({
        from : "Bhavishaya Khandelwal <bhavishaya@gmail.com>",
        to : "bhavishayakhandelwal@gmail.com", 
        subject : "Hello Bhavishaya, How are you...!!", 
        text : "Hello YT Thapa", 
        html : "<b> Hello World </b>", 
    });

    console.log("Message sent : %s", info.messageId);
    res.json(info);
};


module.exports = sendMail;