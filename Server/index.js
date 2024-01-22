"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const user_1 = require("./routes/user");
const admin_1 = require("./routes/admin");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/admin', admin_1.adminRouter);
app.use('/user', user_1.router);
mongoose_1.default.connect('mongodb+srv://anirbanug23:W1aNrCWuaPTAKj5k@cluster0.tucwoij.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "college" });
app.listen(3000, () => {
    console.log("app is runnin");
});
