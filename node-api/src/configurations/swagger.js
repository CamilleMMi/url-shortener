const configuration = require("./configuration");

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Url Shortener API",
            version: "1.0.0",
            description: "API part of my Url Shortening App",
        },
        servers: [
            {
                url: `http://localhost:${configuration.port}/`,
            },
        ],
    },
    apis: [
        "./src/routes/index.js",
        "./src/routes/urlRoutes.js",
        "./src/routes/playgroundRoutes.js"
    ],
};

module.exports = swaggerOptions;