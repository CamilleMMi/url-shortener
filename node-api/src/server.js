const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const errorMiddleware = require('./middlewares/errorMiddleware');

const configuration = require('./configurations/configuration');
const connectDB = require('./configurations/mongo');
const swaggerOptions = require('./configurations/swagger');

const cors = require('cors');
const routes = require('./routes');

require('./crons/urlCleanupCron');

const { port, env } = configuration;

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

routes(app);

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server running in ${env} mode on port ${port}`);
    console.log(`API Documentation available at http://localhost:${port}/api-docs`);
});