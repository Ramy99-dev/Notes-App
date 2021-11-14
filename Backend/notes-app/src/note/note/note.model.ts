import * as mongoose from 'mongoose';


export const noteSchema = new mongoose.Schema({

    content:{type:String , required:true}
}) 

export interface Note{
    id:String ,
    content:String
}