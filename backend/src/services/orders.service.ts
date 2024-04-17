import { Types } from "mongoose";

import { Orders, OrdersModel} from "../models/orders.model";

const getOrders = async () => {
    return await OrdersModel.find();
};

const getOrder = async (id: string) => {
    return await OrdersModel.findOne({ _id: new Types.ObjectId(id) });
};

const createOrder = async (orderToCreate: Orders) => {
    const newOrder = new OrdersModel(orderToCreate);
    await newOrder.save();
    return getOrders();
}

const updateOrder = async (id : string, orderToUpdate: Orders) => {
    await OrdersModel.updateOne(
        {
            _id: new Types.ObjectId(id),
        },
        orderToUpdate
    );
    return await getOrders();
}

const deleteOrder = async (id: string) => {
    await OrdersModel.deleteOne({ _id:new Types.ObjectId(id) });
};

export {
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,
};