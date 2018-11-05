import { Request, Response, NextFunction} from "express";
// import * as service from "../services/project";

export async function getFood(req: Request, res: Response, next: NextFunction) {

    try {
        // const projects = await service.findAll(req.context, req.swagger.params.status.value);
        // return res.status(200).json(projects);
        return res.status(200).json({message: 'got food'});
    }
    catch (err) {
        return next(err);
    }

}

export async function getSingleFood(req: Request, res: Response, next: NextFunction) {

    try {
        // const project = await service.findById(req.context, req.swagger.params.id.value);
        // return res.status(200).json(project);
        return res.status(200).json({message: 'got single food'});
    }
    catch (err) {
        return next(err);
    }

}

export async function postFood(req: Request, res: Response, next: NextFunction) {

    try {
        // const project = await service.create(req.context, req.swagger.params.body.value);
        // return res.status(201).json(project);
        return res.status(201).json({message: 'post food'});
    }
    catch (err) {
        return next(err);
    }

}

export async function deleteFoodById(req: Request, res: Response, next: NextFunction) {

    try {
        // const project = await service.removeById(req.context, req.swagger.params.id.value);
        // return res.status(204).json(project);
        return res.status(204).json({message: 'delete food'});
    }
    catch (err) {
        return next(err);
    }

}

export async function patchFood(req: Request, res: Response, next: NextFunction) {

    try {
        // const project = await service.update(req.context, req.swagger.params.id.value, req.swagger.params.body.value);
        // return res.status(200).json(project);
        return res.status(200).json({message: 'patch food'});
    }
    catch (err) {
        return next(err);
    }

}
