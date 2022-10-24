import express, { Application, json, urlencoded } from "express";
import BackendRoute from "./routes/rutas";

class Server {

    private backend: Application;
    private backendRoute: BackendRoute;

    constructor() {
        this.backend = express();
        this.backendRoute = new BackendRoute();
        this.config();
        this.route();
        this.start();
    }

    public config = (): void => {
        let puerto:any =process.env.PORT||1802;
        
        this.backend.set('port', puerto);
        
        
        this.backend.use(urlencoded({extended: true}));
        this.backend.use(json());  
    }

    public route = (): void => {
        this.backend.use('/api', this.backendRoute.router);
    }

    public start = (): void => {
        this.backend.listen(this.backend.get('port'), () => {
            console.log('Server on port:', this.backend.get('port'));
        });
    }

}

const server = new Server();