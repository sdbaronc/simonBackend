import { Router } from "express";
import BackendController from "../controller/controlador";
class BackendRoute {
    public router: Router;
    private backendController: BackendController;

    constructor() {
        this.router = Router();
        this.backendController = new BackendController();
        this.config();
    }

    public config = (): void => {
        this.router.get('/', this.backendController.index);
        this.router.get('/puntaje/:id', this.backendController.getPuntaje);
        this.router.get('/puntajes/', this.backendController.AllPuntajes);
        this.router.get('/puntajeso/', this.backendController.Allorders);
        this.router.post('/puntajeI/', this.backendController.insertPuntaje);
        this.router.put('/puntajeE/', this.backendController.updatePuntaje);
        this.router.delete('/puntajeD/', this.backendController.deletePuntaje);
    }
}
export default BackendRoute;