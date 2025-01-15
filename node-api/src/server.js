const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const configuration = require('./configurations/configuration');
const cors = require('cors');
const connectDB = require('./configurations/mongo');
const routes = require('./routes');

const { port } = configuration;

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

routes(app);

app.use(errorMiddleware);

app.listen(port, () => console.log(`Server running on port ${port}`));