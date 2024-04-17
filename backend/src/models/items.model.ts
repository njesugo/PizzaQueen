import mongoose, { Schema, Types, model } from "mongoose";

export const ItemSchema: Schema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        description:{
            type: String,
            require: true,
        },
        price: {
            type: Number,
            require: true,
        },      
    }
);

export interface Item {
    _id: Types.ObjectId;
    name: String;
    description: String;
    price: Number;
}

export const ItemModel = model(
    "items",
    ItemSchema,
);

