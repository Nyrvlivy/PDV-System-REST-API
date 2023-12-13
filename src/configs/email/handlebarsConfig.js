const handlebars = require("handlebars");
const fs = require("fs").promises;

class HandlebarsConfig {
    constructor(templatePath) {
        this.templatePath = templatePath;
    }

    async loadTemplate() {
        try {
            this.emailTemplate = await fs.readFile(this.templatePath, "utf-8");

            this.compiledTemplate = handlebars.compile(this.emailTemplate);
        } catch (error) {
            console.error("Erro ao carregar o template:", error);
            throw error;
        }
    }

    generateHtml(data) {
        try {
            return this.compiledTemplate(data);
        } catch (error) {
            console.error("Erro ao gerar o HTML:", error);
            throw error;
        }
    }
}

module.exports = HandlebarsConfig;
