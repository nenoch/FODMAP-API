import { Request, Response, NextFunction} from 'express';
import * as service from '../services/food';

export async function getFood(req: Request, res: Response, next: NextFunction) {

    try {
        const food = await service.findAll();
        return res.status(200).json(food);
    }
    catch (err) {
        return next(err);
    }

}

export async function getFoodById(req: Request, res: Response, next: NextFunction) {

    try {
        const food = await service.findById(req.params.foodId);
        return res.status(200).json(food);
    }
    catch (err) {
        return next(err);
    }

}

export async function postFood(req: Request, res: Response, next: NextFunction) {

    try {
        const food = await service.create(req.body);
        return res.status(201).json(food);
    }
    catch (err) {
        return next(err);
    }

}

export async function deleteFoodById(req: Request, res: Response, next: NextFunction) {

    try {
        const food = await service.removeById(req.params.foodId);
        return res.status(204).json(food);
    }
    catch (err) {
        return next(err);
    }

}

export async function patchFood(req: Request, res: Response, next: NextFunction) {

    try {
        const food = await service.update(req.params.foodId, req.body);
        return res.status(200).json(food);
    }
    catch (err) {
        return next(err);
    }

}
