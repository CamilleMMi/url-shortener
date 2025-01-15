const playgroundRoutes = require('./playgroundRoutes');
const urlRoutes = require('./urlRoutes');

module.exports = (app) => {
    app.use('/api/playground', playgroundRoutes);

    app.use('/', urlRoutes);
};