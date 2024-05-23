import { Types } from "mongoose";

import { Order, OrderModel} from "../models/orders.model";

const getOrders = async () => {
    return await OrderModel.find();
};

const getOrder = async (id: string) => {
    return await OrderModel.findOne({ _id: new Types.ObjectId(id) });
};

const createOrder = async (orderToCreate: Order) => {
    const newOrder = new OrderModel(orderToCreate);
    await newOrder.save();
    return getOrders();
}

const updateOrder = async (id : string, orderToUpdate: Order) => {
    await OrderModel.updateOne(
        {
            _id:id
        },
        {...orderToUpdate,_id:id}
    );
    // orderToUpdate._id=id;
    // const orders= new OrderModel(orderToUpdate);
    // await orders.save();
    return await getOrder(id);
}

const deleteOrder = async (id: string) => {
    await OrderModel.deleteOne({ _id:new Types.ObjectId(id) });
    return await getOrders();
};

export {
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,
};