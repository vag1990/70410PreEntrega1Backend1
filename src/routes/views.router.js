import { Router } from "express";
const router = Router ();


// mostrar todos los products (1erpunto)

router.get("/products", async (req,res) => {
    res.render("home")
})




export default router;
