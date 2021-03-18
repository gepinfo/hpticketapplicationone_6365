import { Request, Response } from 'express';
import { servicetypeService } from '../service/servicetypeService';
import { CustomLogger } from '../config/Logger'
let servicetype = new servicetypeService();

export class servicetypeController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
servicetype.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicetypeController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicetypeController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
servicetype.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicetypeController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicetypeController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
servicetype.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicetypeController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicetypeController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
servicetype.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicetypeController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicetypeController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
servicetype.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicetypeController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicetypeController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
servicetype.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into servicetypeController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from servicetypeController.ts: GpCreate');
    })}


}