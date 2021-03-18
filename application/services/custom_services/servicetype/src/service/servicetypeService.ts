import { Request, Response } from 'express';
import {servicetypeDao} from '../dao/servicetypeDao';
import { CustomLogger } from '../config/Logger'
let servicetype = new servicetypeDao();

export class servicetypeService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicetypeService.ts: GpDelete')
     const  servicetypeId = req.params.id;
     servicetype.GpDelete(servicetypeId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicetypeService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicetypeService.ts: GpSearch')
     const  servicetypeData = req.query;
     servicetype.GpSearch(servicetypeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicetypeService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicetypeService.ts: GpSearchForUpdate')
     const  servicetypeData = req.body;
     servicetype.GpSearchForUpdate(servicetypeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicetypeService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicetypeService.ts: GpUpdate')
     const  servicetypeData = req.body;
     servicetype.GpUpdate(servicetypeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicetypeService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicetypeService.ts: GpGetAllValues')
     
     servicetype.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicetypeService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into servicetypeService.ts: GpCreate')
     const  servicetypeData = req.body;
     servicetype.GpCreate(servicetypeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from servicetypeService.ts: GpCreate')
         callback(response);
         });
    }


}