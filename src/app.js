import express from "express";
const app = express();
const PUERTO = 8080;
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";



//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//rutas

app.use("/api/products", productsRouter)
app.use("/api/carts", cartsRouter);


app.listen(PUERTO, () => {
    console.log("Escuchando puerto 8080");
})

