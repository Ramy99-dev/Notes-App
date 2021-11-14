import { Injectable, NotFoundException } from '@nestjs/common';
import { Note } from './note.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class NoteService {


    constructor(@InjectModel('Note') private noteModel : Model<Note>){}

    async addNote(note:Note)
    {
       const newNote = new this.noteModel(note);
       const result = await newNote.save();
       return result;
    }

    async getAllNotes()
    {
        return await this.noteModel.find();
    }

    async getNote(id:string)
    {
        return await this.noteModel.findById(id);
    }

    async deleteNote(id:string)
    {
        return await this.noteModel.findByIdAndDelete(id);
    }

    async  updateNote(id:string , note:Note)
    {
      
     try
     {
        await this.noteModel.findByIdAndUpdate(id,{content:note.content})
     }
     catch(e)
     {
         throw new NotFoundException()
     }
       
       
    }
}
