import express from "express";
import {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orders.controller";

const routerOrder = express.Router();

routerOrder.get("/", getOrders);

routerOrder.get("/:id", getOrder);

routerOrder.post("/", createOrder);

routerOrder.put("/:id", updateOrder);

routerOrder.delete("/:id", deleteOrder);

export { routerOrder };