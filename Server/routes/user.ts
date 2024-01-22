
import { Router } from "express";
import mongoose from "mongoose";
import { Events, Team } from "../data/mongo";

const router = Router();

router.post("/submitTeam",(req, res)=>{

    const teamInfo = req.body;
    Team.findOne(teamInfo.contact).then((team)=>{
        if(team){
            res.json({
                message : "team already exists"
            })
        }
        else{
            const newTeam = new Team(teamInfo);
            newTeam.save();
            res.json({
                message : "team created"
            })
        }
    })
    
})

router.get("/:event",async (req,res)=>{
    const event = await Events.findById(req.params.event);
    res.json({event})
})

export {router}