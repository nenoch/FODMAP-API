import * as mongoose from 'mongoose';
import { Food, IFood } from '../models/food';

/**
 * @returns Promise
 * GET Food[]
 */
export async function findAll(): Promise<IFood[]> {
    return await Food.find({}).lean();
}

/**
 * @param  {string} id Project ID
 * @returns Promise
 * GET Food by Id
 */
export async function findById(id: string): Promise<IFood> {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid ID");

    return await Food.findOne({ _id: id }).lean();
}

/**
 * @param  {Object} body Food data
 * @returns Promise
 * POST Food
 * Create
 */
export async function create(body: IFood): Promise<IFood> {
    body.dateCreated = new Date();
    body.dateUpdated = new Date();
    if (!body.name) throw new Error("Missing name for new food entry");
    const newFood = await Food.create(body);
    return newFood.toObject();
}

/**
 * @param  {string} id Food ID
 * @param  {Object} patch partial IFood object
 * @returns Promise
 * PATCH Food item
 */
export async function update(id: string, patch: Partial<IFood>): Promise<IFood> {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid ID");
    if (patch.dateCreated) throw new Error("Cannot update the creation date");

    patch['dateUpdated'] = new Date();

    return await Food.findOneAndUpdate({ _id: id }, patch, { new: true }).lean();
}

/**
 * @returns Promise
 * DELETE Food
 */
export async function removeById(id: string): Promise<void> {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid ID");

    return await Food.findOneAndRemove({ _id: id }).lean();
}
