import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { routerOrder } from "./routes/orders.route";
import { routerItem } from "./routes/items.route";
import morgan from 'morgan';

const hostname = "127.0.0.1";
const port = 5000;

mongoose.connect(
  `mongodb+srv://mr_jj:mr_jj@cluster0.gvie2ki.mongodb.net/PizzaQueen?retryWrites=true&w=majority&appName=Cluster0`
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.get("/", (req, res) => {
  res.send("Hello !");
});

app.use("/orders", routerOrder);
app.use("/items", routerItem);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

