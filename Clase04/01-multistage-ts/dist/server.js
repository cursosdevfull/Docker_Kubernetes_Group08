"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hola mundo");
});
http_1.default
    .createServer(app)
    .listen(3000, () => console.log("Servidor iniciado en el puerto 3000"));
//# sourceMappingURL=server.js.map