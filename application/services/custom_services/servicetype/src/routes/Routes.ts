import { Request, Response, NextFunction } from "express";
import { servicetypeController } from '../controller/servicetypeController';


export class Routes {
    private servicetype: servicetypeController = new servicetypeController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/servicetype/:id').delete(this.servicetype.GpDelete);
app.route('/servicetype/get/search').get(this.servicetype.GpSearch);
app.route('/servicetype/get/update').put(this.servicetype.GpSearchForUpdate);
app.route('/servicetype').put(this.servicetype.GpUpdate);
app.route('/servicetype').get(this.servicetype.GpGetAllValues);
app.route('/servicetype').post(this.servicetype.GpCreate);
     }

}