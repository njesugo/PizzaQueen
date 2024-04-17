import { model, Schema, Types } from "mongoose";

const ItemSchema: Schema = new Schema(
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
        quantity:{
            type: Number,
            require: true,
        },
    },
    { versionKey: false }
);


export const OrdersSchema : Schema = new Schema(
    {
        number:{
            type: String,
            require: true,
        },
        date:{
            type: Date,
            require: true,
        },
        status:{
            type: String,
            require: true,
        },
        client:{
            name: {
                type: String,
                require: true,
            },
            firstname: {
                type: String,
                require: true,
            },
        },
        items:[ItemSchema],
    },
    { versionKey: false }
);

export interface Item {
    _id: Types.ObjectId;
    name: String;
    description: String;
    price: Number;
    quantity: Number;

}

export interface Orders {
    _id: Types.ObjectId;
    number: String;
    date: Date;
    status: String;
    client: Object;
    items: Item[];
}

export const OrdersModel = model(
    "orders",
    OrdersSchema,
);