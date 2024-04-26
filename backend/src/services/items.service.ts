import { Types } from "mongoose";

import { Item, ItemModel} from "../models/items.model";

const getItems = async () => {
    return await ItemModel.find();
};

const getItem = async (id: string) => {
    return await ItemModel.findOne({ _id: new Types.ObjectId(id) });
};

const createItem = async (orderToCreate: Item) => {
    const newOrder = new ItemModel(orderToCreate);
    await newOrder.save();
    return getItems();
}

const updateItem = async (id : string, orderToUpdate: Item) => {
    await ItemModel.updateOne(
        {
            _id: new Types.ObjectId(id),
        },
        orderToUpdate
    );
    return await getItems();
}

const deleteItem = async (id: string) => {
    await ItemModel.deleteOne({ _id:new Types.ObjectId(id) });
};

export {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
};