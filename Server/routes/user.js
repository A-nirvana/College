"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const mongo_1 = require("../data/mongo");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/submitTeam", (req, res) => {
    const teamInfo = req.body;
    mongo_1.Team.findOne(teamInfo.contact).then((team) => {
        if (team) {
            res.json({
                message: "team already exists"
            });
        }
        else {
            const newTeam = new mongo_1.Team(teamInfo);
            newTeam.save();
            res.json({
                message: "team created"
            });
        }
    });
});
