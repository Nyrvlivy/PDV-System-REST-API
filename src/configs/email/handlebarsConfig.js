const handlebars = require("handlebars");
const fs = require("fs").promises;

class HandlebarsConfig {
    constructor(templatePath) {
        // Carregar o caminho do template
        this.templatePath = templatePath;
    }

    async loadTemplate() {
        try {
            // Ler o conteúdo do arquivo do template
            this.emailTemplate = await fs.readFile(this.templatePath, "utf-8");

            // Compilar o template usando Handlebars
            this.compiledTemplate = handlebars.compile(this.emailTemplate);
        } catch (error) {
            console.error("Erro ao carregar o template:", error);
            throw error;
        }
    }

    generateHtml(data) {
        try {
            // Gerar o HTML usando Handlebars
            return this.compiledTemplate(data);
        } catch (error) {
            console.error("Erro ao gerar o HTML:", error);
            throw error;
        }
    }
}

module.exports = HandlebarsConfig;
