
import { Router } from "express";
import mongoose from "mongoose";
import { Events } from "../data/mongo";

const adminRouter  = Router();

adminRouter.post("/eventPost",(req,res)=>{
    
    console.log(req.body)
    const newEvent = new Events(req.body);
    console.log(newEvent)
    newEvent.save();
    res.json("Event created successfully") 
})

export {adminRouter};