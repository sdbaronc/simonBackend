"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const rutas_1 = __importDefault(require("./routes/rutas"));
class Server {
    constructor() {
        this.config = () => {
            let puerto = process.env.PORT || 1802;
            this.backend.set('port', puerto);
            this.backend.use((0, express_1.urlencoded)({ extended: true }));
            this.backend.use((0, express_1.json)());
        };
        this.route = () => {
            this.backend.use('/api', this.backendRoute.router);
        };
        this.start = () => {
            this.backend.listen(this.backend.get('port'), () => {
                console.log('Server on port:', this.backend.get('port'));
            });
        };
        this.backend = (0, express_1.default)();
        this.backendRoute = new rutas_1.default();
        this.config();
        this.route();
        this.start();
    }
}
const server = new Server();
