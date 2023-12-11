const nodemailer = require("../../configs/nodemailer");
const fs = require("fs").promises;
const path = require("path");
require("dotenv").config();

class OrderEmailService {
    async sendOrderConfirmationEmail(customerEmail) {
        try {
            const templatePath = path.join(
                __dirname,
                "emailTemplates",
                "orderConfirmation.html"
            );
            const emailTemplate = await fs.readFile(templatePath, "utf-8");

            const mailOptions = {
                from: `"${process.env.EMAIL_NAME}" <${process.env.EMAIL_FROM}>`,
                to: customerEmail,
                subject: "Confirmação de Pedido",
                html: emailTemplate,
            };

            await nodemailer.sendMail(mailOptions);
            console.log("Email de confirmação enviado!");
        } catch (error) {
            console.error("Erro ao enviar e-mail de confirmação:", error);
            throw error;
        }
    }
}

module.exports = new OrderEmailService();
