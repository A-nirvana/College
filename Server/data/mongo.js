"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = exports.Team = void 0;
const mongoose_1 = require("mongoose");
const TeamSchema = new mongoose_1.Schema({
    leader: String,
    contact: Number,
    members: [String]
});
const EventSchema = new mongoose_1.Schema({
    category: String,
    title: String,
    description: String,
});
const Team = (0, mongoose_1.model)("Team", TeamSchema);
exports.Team = Team;
const Events = (0, mongoose_1.model)("Event", EventSchema);
exports.Events = Events;
