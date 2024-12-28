import { Router } from "express";
const router = Router(); 

//Array para almacenar usuarios
const products = []; 

//Ruta que me retorna todo el listado de usuarios: 

router.get("/", (req, res) => {
    res.send(products); 
})

router.post("/", (req, res) => {
    const nuevoProducto = req.body; 
    usuarios.push(nuevoProducto); 
    res.send({status: "success", mensaje: "Producto creado correctamente"}); 
})

export default router; 