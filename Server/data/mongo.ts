import { Schema, model} from "mongoose";

const TeamSchema = new Schema({
    leader : String,
    contact : Number,
    members : [String]
})

const EventSchema = new Schema({
    category : String,
    title : String,
    description : String,
})

const Team = model("Team",TeamSchema);
const Events = model("Event",EventSchema);

export {Team,Events}