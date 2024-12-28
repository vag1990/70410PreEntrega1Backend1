import { Router } from "express";
const router = Router(); 

const products = []; 

router.get("/", (req, res) => {
    res.send(products); 
})

router.post("/", (req, res) => {
    const nuevoProducto = req.body; 
    usuarios.push(nuevoProducto); 
    res.send({status: "success", mensaje: "Producto creado correctamente"}); 
})

export default router; 