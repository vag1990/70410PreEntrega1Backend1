import { Router } from "express";
const router = Router(); 


 
const carts = []; 

router.get("/", (req, res) => {
    res.send(carts); 
})

router.post("/", (req, res) => {
    const newCart = req.body; 
    mascotas.push(newCart);
    res.send({status:"success", mensaje: "Nuevo Carrito!!"}); 
})

export default router;