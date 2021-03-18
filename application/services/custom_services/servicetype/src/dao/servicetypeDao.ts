import * as mongoose from 'mongoose';
import servicetypeModel from '../models/servicetype';
import { CustomLogger } from '../config/Logger'


export class servicetypeDao {
    private servicetype = servicetypeModel;
    constructor() { }
public GpDelete(servicetypeId, callback){
new CustomLogger().showLogger('info', 'Enter into servicetypeDao.ts: GpDelete')

this.servicetype.findByIdAndRemove(servicetypeId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from servicetypeDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(servicetypeData, callback){
new CustomLogger().showLogger('info', 'Enter into servicetypeDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(servicetypeData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.servicetype.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from servicetypeDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(servicetypeData, callback){
new CustomLogger().showLogger('info', 'Enter into servicetypeDao.ts: GpSearchForUpdate')

this.servicetype.findOneAndUpdate({ _id: servicetypeData._id }, servicetypeData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from servicetypeDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(servicetypeData, callback){
new CustomLogger().showLogger('info', 'Enter into servicetypeDao.ts: GpUpdate')

this.servicetype.findOneAndUpdate({ _id: servicetypeData._id }, servicetypeData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from servicetypeDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into servicetypeDao.ts: GpGetAllValues')

this.servicetype.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from servicetypeDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(servicetypeData, callback){
new CustomLogger().showLogger('info', 'Enter into servicetypeDao.ts: GpCreate')
let temp = new servicetypeModel(servicetypeData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from servicetypeDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}