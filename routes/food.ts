import { Application } from 'express';
import {
    getFood,
    postFood,
    deleteFoodById,
    getFoodById,
    patchFood
} from '../controllers/food'
// import * as service from '../services/project';

export class FoodRoutes {

    public routes(app: Application): void {

        app.route('/food')
            .get(getFood)
            .post(postFood);

        app.route('/food/:foodId')
            .get(getFoodById)
            .delete(deleteFoodById)
            .patch(patchFood);
    }
}