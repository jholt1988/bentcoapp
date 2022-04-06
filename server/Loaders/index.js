const expressLoader = require('./express');
const routesLoader = require('../Routes/index');
const passportLoader = require('./passport');
const swaggerLoader = require('./swagger');





module.exports = async (app) => {
        const expressApp = await expressLoader(app)
        const passport = await passportLoader(expressApp)
        routesLoader(app, passport)
        
        await swaggerLoader(app)
        // Error Handler
        app.use((err, req, res, next) => {

                const { message, status } = err;

                return res.status(status).send({ message });
        })

        return app
    
} 