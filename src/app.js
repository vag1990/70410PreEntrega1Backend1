
//
import express from "express";
const app = express();
const puerto = 8080;

//middleware//
app.use(express.json());
app.use(express.urlencoded({extended:true}));


 
