
import express from "express";
import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";
import cors from "cors"

import { router as userRouter } from "./routes/user";
import { adminRouter } from "./routes/admin";

const app: express.Application = express();

app.use(cors())
app.use(express.json())

app.use('/admin',adminRouter);
app.use('/user',userRouter);

mongoose.connect('mongodb+srv://anirbanug23:W1aNrCWuaPTAKj5k@cluster0.tucwoij.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "college" } as ConnectOptions)

app.listen(3000,()=>{
    console.log("app is runnin")
})
