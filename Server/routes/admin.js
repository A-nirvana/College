"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = require("express");
const mongo_1 = require("../data/mongo");
const adminRouter = (0, express_1.Router)();
exports.adminRouter = adminRouter;
adminRouter.post("/eventPost", (req, res) => {
    console.log(req.body);
    const newEvent = new mongo_1.Events(req.body);
    console.log(newEvent);
    newEvent.save();
    res.json("Event created successfully");
});
