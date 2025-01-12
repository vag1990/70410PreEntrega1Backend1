import express from "express";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
const app = express();
const PUERTO = 8080;
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import viewsRouter from "./routes/views.router.js";

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));

//express.handlebars
app.engine("handlebars", engine ());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//rutas
app.use("/api/products", productsRouter)
app.use("/api/carts", cartsRouter);
app.use("/", viewsRouter);

//listening
app.listen(PUERTO, () => {
    console.log("Escuchando puerto 8080");
})

