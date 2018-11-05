import * as express from "express";
import * as SwaggerExpress from "swagger-express-mw";
const app = express();
export default app;

var config = {
    appRoot: __dirname // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
    if (err) { throw err; }

    // install middleware
    swaggerExpress.register(app);

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
        console.log(`Express server listening on port ${PORT}`);
    })

});
