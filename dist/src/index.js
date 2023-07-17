"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const constants_1 = require("./infrastructure/configuration/constants");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get("/", (_req, res) => {
    res.send({
        "message": "Hello from server api"
    });
});
app.listen(constants_1.PORT, () => {
    console.log(`Server running on PORT: ${constants_1.PORT}`);
});
