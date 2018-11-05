import { Schema, model } from 'mongoose';

export interface IFood {
    _id: string;
    name: string;
    dateCreated: Date;
    dateUpdated: Date;
    notes: string;
    category: CATEGORY;
    safety: SAFETY;
}

export const enum CATEGORY {
    vegetables = 'Vegetables',
    fruits = 'Fruits',
    dairies = 'Dairies'
}

export const enum SAFETY {
    RED = 'RED',
    AMBER = 'AMBER',
    GREEN = 'GREEN'
}

export const foodSchema: Schema = new Schema({
    name: { type: String },
    dateCreated: {
        type: Date,
        default: Date.now },
    dateUpdated: { type: Date },
    notes: { type: String },
    category: { type: String },
    safety: { type: String }
});

export const Food = model("Food", foodSchema);


