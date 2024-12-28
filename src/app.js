
import express from "express";
const app = express();
const PUERTO = 8080;
import productsRouter from "./routes/products-router.js";
import cartsRouter from "./routes/carts-router.js";

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

//Rutas
app.use("/api/carrito", cartsRouter); 
app.use("/api/productos", productsRouter); 


app.listen(PUERTO, () => {
    console.log("Escuchando en el puerto de 8080"); 
})


app.use("/static", express.static("public")); 

