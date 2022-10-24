"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const people_json_1 = __importDefault(require("../db/people.json"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class BackendModel {
    constructor() {
        this.getPuntajeByID = (id) => people_json_1.default[--id];
        this.getPuntajes = () => people_json_1.default;
        this.insertPuntaje = (puntaje) => {
            console.log(path_1.default.join(__dirname, 'db'));
            let data = fs_1.default.readFileSync('dist/db/people.json', 'utf8');
            let puntajeData = JSON.parse(data);
            puntajeData.push(puntaje);
            data = JSON.stringify(puntajeData);
            fs_1.default.writeFile('dist/db/people.json', data, (err) => {
                if (err)
                    throw err;
                return false;
            });
            return true;
        };
        this.updatePuntaje = (puntaje) => {
            console.log('UPDATE');
            return true;
        };
        this.deletePuntaje = (id) => {
            console.log('DELETE');
            return true;
        };
        this.ordenar = () => {
            let data = fs_1.default.readFileSync('dist/db/people.json', 'utf8');
            console.log(data);
            let puntajeData = JSON.parse(data);
            puntajeData.sort((a, b) => b["puntaje"] - a["puntaje"]);
            return puntajeData;
        };
        // TODO document why this constructor is empty
    }
}
exports.default = BackendModel;
