"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = __importDefault(require("../controller/controlador"));
class BackendRoute {
    constructor() {
        this.config = () => {
            this.router.get('/', this.backendController.index);
            this.router.get('/puntaje/:id', this.backendController.getPuntaje);
            this.router.get('/puntajes/', this.backendController.AllPuntajes);
            this.router.get('/puntajeso/', this.backendController.Allorders);
            this.router.post('/puntajeI/', this.backendController.insertPuntaje);
            this.router.put('/puntajeE/', this.backendController.updatePuntaje);
            this.router.delete('/puntajeD/', this.backendController.deletePuntaje);
        };
        this.router = (0, express_1.Router)();
        this.backendController = new controlador_1.default();
        this.config();
    }
}
exports.default = BackendRoute;
