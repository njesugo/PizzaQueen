import * as OrdersService from "../services/orders.service";

export const getOrders = async (req: any, res: any) => {
  const orders = await OrdersService.getOrders();
  return res.status(200).json(orders);
};

export const getOrder = async (req: any, res: any) => {
  const { id } = req.params;
  const order = await OrdersService.getOrder(id);
  return res.status(200).json(order);
};

export const createOrder = async (req: any, res: any) => {
  const orderToCreate = req.body;
  const orders = await OrdersService.createOrder(orderToCreate);
  return res.status(200).json(orders);
};

export const updateOrder = async (req: any, res: any) => {
  const { id } = req.params;
  const orderToUpdate = await OrdersService.updateOrder(
    id,
    req.body
  );
  return res
    .status(200)
    .json(orderToUpdate);
};

export const deleteOrder = async (req: any, res: any) => {
  const { id } = req.params;
  await OrdersService.deleteOrder(id);
  return res
    .status(200)
    .json(`Student with id ${id} succesfully deleted`);
};