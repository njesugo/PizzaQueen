import { Types } from "mongoose";

import { Item, ItemModel} from "../models/items.model";

const getOrders = async () => {
    return await ItemModel.find();
};

const getOrder = async (id: string) => {
    return await ItemModel.findOne({ _id: new Types.ObjectId(id) });
};

const createOrder = async (orderToCreate: Item) => {
    const newOrder = new ItemModel(orderToCreate);
    await newOrder.save();
    return getOrders();
}

const updateOrder = async (id : string, orderToUpdate: Item) => {
    await ItemModel.updateOne(
        {
            _id: new Types.ObjectId(id),
        },
        orderToUpdate
    );
    return await getOrders();
}

const deleteOrder = async (id: string) => {
    await ItemModel.deleteOne({ _id:new Types.ObjectId(id) });
};

export {
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,
};