
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const servicetypeSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   servicetypename: String,
   description: String
})

const servicetypeModel = mongoose.model('servicetype', servicetypeSchema, 'servicetype');
export default servicetypeModel;
