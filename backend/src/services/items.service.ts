import { Types } from "mongoose";

import { Item, ItemModel} from "../models/items.model";

const getItems = async () => {
    return await ItemModel.find();
};

const getItem = async (id: string) => {
    return await ItemModel.findOne({ _id: new Types.ObjectId(id) });
};

const createItem = async (itemToCreate: Item) => {
    const newOrder = new ItemModel(itemToCreate);
    await newOrder.save();
    return getItems();
}

const updateItem = async (id : string, itemToUpdate: Item) => {
    await ItemModel.updateOne(
        {
            _id:id
        },
        itemToUpdate
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