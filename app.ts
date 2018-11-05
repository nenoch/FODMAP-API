import { Application } from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from "mongoose";
import { FoodRoutes } from './routes/food';

class App {

    public app: Application;
    public foodRoutes: FoodRoutes = new FoodRoutes();
    public mongoUrl: string = `mongodb://localhost/food_api`;

    constructor() {
        this.app = express();
        this.config();
        this.foodRoutes.routes(this.app);
        this.setup();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private setup(): void {
        (mongoose as any).Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
}

export default new App().app;