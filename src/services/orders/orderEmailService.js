const nodemailer = require("../../configs/nodemailer");
require("dotenv").config();

class OrderEmailService {
    async sendOrderConfirmationEmail(customerEmail) {
        const mailOptions = {
            from: `"${process.env.EMAIL_NAME}" <${process.env.EMAIL_FROM}>`,
            to: customerEmail,
            subject: "Confirmação de Pedido",
            text: "Obrigado por fazer um pedido conosco! 😘",
            html: "<b>Obrigado por fazer um pedido conosco! 😘</b>",
        };

        await nodemailer.sendMail(mailOptions);
    }
}

module.exports = new OrderEmailService();
