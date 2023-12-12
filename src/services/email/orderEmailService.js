const nodemailer = require("../../configs/email/nodemailer");
const HandlebarsConfig = require("../../configs/email/handlebarsConfig");
const path = require("path");
require("dotenv").config();

class OrderEmailService {
    constructor() {
        this.templatePath = path.join(
            __dirname,
            "emailTemplates",
            "orderConfirmation.html"
        );

        this.handlebarsConfig = new HandlebarsConfig(this.templatePath);
    }

    async sendOrderConfirmationEmail(customerEmail, orderNumber, customerName) {
        try {
            await this.handlebarsConfig.loadTemplate();

            const templateData = {
                orderNumber,
                customerName,
            };

            const emailHtml = this.handlebarsConfig.generateHtml(templateData);

            const mailOptions = {
                from: `"${process.env.EMAIL_NAME}" <${process.env.EMAIL_FROM}>`,
                to: customerEmail,
                subject: "Confirmação de Pedido",
                html: emailHtml,
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
