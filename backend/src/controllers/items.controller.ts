import * as ItemsService from "../services/items.service";

export const getItems = async (req: any, res: any) => {
  const items = await ItemsService.getItems();
  return res.status(200).json(items);
};

export const getItem = async (req: any, res: any) => {
  const { id } = req.params;
  const item = await ItemsService.getItem(id);
  return res.status(200).json(item);
};

export const createItem = async (req: any, res: any) => {
  const itemToCreate = req.body;
  const items = await ItemsService.createItem(itemToCreate);
  return res.status(200).json(items);
};

export const updateItem = async (req: any, res: any) => {
  const { id } = req.params;
  const itemToUpdate = await ItemsService.updateItem(
    id,
    req.body
  );
  return res.status(200).json(itemToUpdate);
};

export const deleteItem = async (req: any, res: any) => {
  const { id } = req.params;
  await ItemsService.deleteItem(id);
  return res
    .status(200)
    .json(`Student with id ${id} succesfully deleted`);
};