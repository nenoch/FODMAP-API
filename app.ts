import * as express from "express";
import * as bodyParser from "body-parser";
import * as SwaggerExpress from "swagger-express-mw";

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private async config(): Promise<void> {
        const config = {
            appRoot: __dirname // required config
        };
        
        SwaggerExpress.create(config, function (err, swaggerExpress) {
            if (err) { throw err; }
            // support application/json type post data
            this.app.use(bodyParser.json());
            //support application/x-www-form-urlencoded post data
            this.app.use(bodyParser.urlencoded({ extended: false }));
            // install middleware
            swaggerExpress.register(this.app);
        });
    }

}

export default new App().app;