const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Challenge Backend 05 - PDV API RESTful",
            version: "1.0.0",
            description:
                "Esse é um projeto piloto de uma API RESTful para um PDV (Frente de Caixa).",
            termsOfService: "https://challenge-backend-05.cyclic.app/terms",
        },
        servers: [
            {
                url: "https://challenge-backend-05.cyclic.app/",
                description: "API de Produção - CYCLIC",
            },
            {
                url: "https://challenge-backend-05.onrender.com/",
                description: "API de Produção - RENDER",
            },
            {
                url: "https://localhost:3000/",
                description: "API de Teste - LOCALHOST",
            },
        ],
        tags: [
            {
                name: "Categorias",
                description:
                    "Essa seção é responsável por gerenciar as categorias.",
            },
            {
                name: "Login",
                description:
                    "Essa seção é responsável por gerenciar a autenticação dos usuários.",
            },
            {
                name: "Usuários",
                description:
                    "Essa seção é responsável por gerenciar os usuários.",
            },

            {
                name: "Produtos",
                description:
                    "Essa seção é responsável por gerenciar os produtos.",
            },
            {
                name: "Clientes",
                description:
                    "Essa seção é responsável por gerenciar os clientes.",
            },
        ],
        paths: {
            "/categoria": {
                get: {
                    summary: "Obtém todas as categorias",
                    description: "Retorna todas as categorias cadastradas",
                    tags: ["Categorias"],
                    responses: {
                        200: {
                            description: "Sucesso",
                            content: {
                                "application/json": {
                                    example: [
                                        {
                                            id: 1,
                                            descricao: "Categoria 1",
                                        },
                                        {
                                            id: 2,
                                            descricao: "Categoria 2",
                                        },
                                    ],
                                },
                            },
                        },
                    },
                    500: {
                        description: "Erro interno do servidor",
                        content: {
                            "application/json": {
                                example: {
                                    mensagem: "Erro interno do servidor!",
                                },
                            },
                        },
                    },
                },
            },
            "/login": {
                post: {
                    summary: "Autentica um usuário",
                    description: "Autentica um usuário e retorna um token JWT.",
                    tags: ["Login"],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/LoginCredentials",
                                },
                            },
                        },
                    },
                    responses: {
                        200: {
                            description: "Sucesso",
                            content: {
                                "application/json": {
                                    example: {
                                        usuario: {
                                            id: 1,
                                            nome: "User",
                                            email: "user@example.com",
                                            token: "jwt_token",
                                        },
                                    },
                                },
                            },
                        },
                        400: {
                            description:
                                "Requisição inválida (parâmetros ausentes ou inválidos)",
                            content: {
                                "application/json": {
                                    example: {
                                        error: "Por favor, insira um e-mail válido!",
                                    },
                                },
                            },
                        },
                        500: {
                            description: "Erro interno do servidor",
                            content: {
                                "application/json": {
                                    example: {
                                        mensagem: "Erro interno do servidor!",
                                    },
                                },
                            },
                        },
                    },
                },
            },
            "/usuario": {
                post: {
                    summary: "Cria um novo usuário",
                    description:
                        "Cria um novo usuário com as informações fornecidas no corpo da requisição",
                    tags: ["Usuários"],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Usuários",
                                },
                                example: {
                                    nome: "New User",
                                    email: "user@example.com",
                                    senha: "new-password",
                                },
                            },
                        },
                    },
                    responses: {
                        201: {
                            description: "Usuário criado com sucesso",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/Userários",
                                    },
                                    example: {
                                        id: 1,
                                        nome: "New User",
                                        email: "user@example.com",
                                    },
                                },
                            },
                        },
                        400: {
                            description:
                                "Requisição inválida (parâmetros ausentes ou inválidos)",
                            content: {
                                "application/json": {
                                    example: {
                                        error: "Nome deve ter no mínimo 3 caracteres!",
                                    },
                                },
                            },
                        },
                        500: {
                            description: "Erro interno do servidor",
                            content: {
                                "application/json": {
                                    example: {
                                        mensagem: "Erro interno do servidor!",
                                    },
                                },
                            },
                        },
                    },
                },

                get: {
                    summary: "Obtém o perfil detalhado do usuário",
                    description:
                        "Retorna as informações do perfil do usuário autenticado",
                    tags: ["Usuários"],
                    security: [{ bearerAuth: [] }],
                    responses: {
                        200: {
                            description: "Sucesso",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/Usuários",
                                    },
                                    example: {
                                        id: 1,
                                        nome: "User",
                                        email: "user@example.com",
                                    },
                                },
                            },
                        },
                        401: {
                            description: "Não autorizado",
                            content: {
                                "application/json": {
                                    example: {
                                        error: "Para acessar este recurso um token de autenticação válido deve ser enviado.",
                                    },
                                },
                            },
                        },
                        404: {
                            description: "Usuário não encontrado",
                            content: {
                                "application/json": {
                                    example: {
                                        error: "Usuário não encontrado.",
                                    },
                                },
                            },
                        },
                        500: {
                            description: "Erro interno do servidor",
                            content: {
                                "application/json": {
                                    example: {
                                        mensagem: "Erro interno do servidor!",
                                    },
                                },
                            },
                        },
                    },
                },
                put: {
                    summary: "Atualiza o perfil do usuário",
                    description:
                        "Atualiza as informações do perfil do usuário autenticado",
                    tags: ["Usuários"],
                    security: [{ bearerAuth: [] }],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Usuários",
                                },
                                example: {
                                    nome: "New Name",
                                    email: "new-email@example.com",
                                    senha: "new-password",
                                },
                            },
                        },
                    },
                    responses: {
                        200: {
                            description: "Sucesso",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/User",
                                    },
                                    example: {
                                        id: 1,
                                        nome: "New Name",
                                        email: "new-email@example.com",
                                    },
                                },
                            },
                        },
                        400: {
                            description:
                                "Requisição inválida (parâmetros ausentes ou inválidos)",
                            content: {
                                "application/json": {
                                    example: {
                                        error: "Nome deve ter no mínimo 3 caracteres!",
                                    },
                                },
                            },
                        },
                        401: {
                            description: "Não autorizado",
                            content: {
                                "application/json": {
                                    example: {
                                        error: "Para acessar este recurso um token de autenticação válido deve ser enviado.",
                                    },
                                },
                            },
                        },
                        500: {
                            description: "Erro interno do servidor",
                            content: {
                                "application/json": {
                                    example: {
                                        mensagem: "Erro interno do servidor!",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        components: {
            schemas: {
                Categorias: {
                    type: "object",
                    properties: {
                        id: { type: "integer", format: "int64" },
                        descricao: { type: "string" },
                    },
                    required: ["id", "descricao"],
                },
                Usuários: {
                    type: "object",
                    properties: {
                        id: { type: "integer", format: "int64" },
                        nome: { type: "string" },
                        email: { type: "string", format: "email" },
                        senha: { type: "string", format: "password" },
                    },
                    required: ["id", "nome", "email", "senha"],
                },
            },
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    apis: [path.join(__dirname, "../src/routers/*.js")],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerSpec, swaggerUi };
