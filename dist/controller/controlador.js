"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const modelo_1 = __importDefault(require("../model/modelo"));
class BackendController {
    constructor() {
        this.index = (req, res) => res.json({ 'error': 0, 'msg': 'API: node-express-ts' });
        this.AllPuntajes = (req, res) => {
            const puntajes = this.model.getPuntajes();
            return res.send(puntajes);
        };
        this.getPuntaje = (req, res) => {
            const { id } = req.params;
            const puntaje = this.model.getPuntajeByID(parseInt(id));
            if (puntaje) {
                return res.send(puntaje);
            }
            return res.json({ 'error': 1, 'msg': 'API: id no found' });
        };
        this.insertPuntaje = (req, res) => {
            this.model.insertPuntaje(req.body);
            return res.json({ 'error': 0, 'msg': 'API: insert' });
        };
        this.updatePuntaje = (req, res) => {
            this.model.updatePuntaje(req.body);
            return res.json({ 'error': 0, 'msg': 'API: update' });
        };
        this.deletePuntaje = (req, res) => {
            const { id } = req.body;
            this.model.deletePuntaje(parseInt(id));
            return res.json({ 'error': 0, 'msg': `API: delete id: ${id}` });
        };
        this.Allorders = (req, res) => {
            const puntajes = this.model.ordenar();
            return res.send(puntajes);
        };
        this.model = new modelo_1.default();
    }
}
exports.default = BackendController;
