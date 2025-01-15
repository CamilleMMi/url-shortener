const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const configuration = require('./configurations/configuration');
const connectDB = require('./configurations/mongo');
const routes = require('./routes');

const { port } = configuration;

connectDB();

const app = express();

app.use(express.json());

routes(app);

app.use(errorMiddleware);

app.listen(port, () => console.log(`Server running on port ${port}`));