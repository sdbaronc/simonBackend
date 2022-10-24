import { Request, Response } from "express";
import BackendMondel from "../model/modelo";
class BackendController {
    private model: BackendMondel;

    constructor() {
        this.model = new BackendMondel();
    }

    public index = (req: Request, res: Response) => res.json({ 'error': 0, 'msg': 'API: node-express-ts' });
    public AllPuntajes = (req: Request, res: Response) =>{
        const puntajes=this.model.getPuntajes();
        return res.send(puntajes);
    } 

    public getPuntaje = (req: Request, res: Response) => {
        const { id } = req.params;
        const puntaje = this.model.getPuntajeByID(parseInt(id));
        if (puntaje) {
            return res.send(puntaje);
        }
        return res.json({ 'error': 1, 'msg': 'API: id no found' });
    }

    public insertPuntaje = (req: Request, res: Response) => { 
        this.model.insertPuntaje(req.body);
        return res.json({ 'error': 0, 'msg': 'API: insert' });
    }

    public updatePuntaje = (req: Request, res: Response) => { 
        this.model.updatePuntaje(req.body);
        return res.json({ 'error': 0, 'msg': 'API: update' });
    }


    public deletePuntaje = (req: Request, res: Response) => {
        const { id } = req.body;
        this.model.deletePuntaje(parseInt(id));
        return res.json({ 'error': 0, 'msg': `API: delete id: ${id}` });
     }
     public Allorders = (req: Request, res: Response) =>{
        const puntajes=this.model.ordenar();
        return res.send(puntajes);
    } 
}
export default BackendController;