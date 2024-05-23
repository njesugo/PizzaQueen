import express from "express";

import {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/items.controller";

const routerItem = express.Router();

routerItem.get("/", getItems);

routerItem.get("/:id", getItem);

routerItem.post("/", createItem);

routerItem.put("/:id", updateItem);

routerItem.delete("/:id", deleteItem);

export { routerItem };