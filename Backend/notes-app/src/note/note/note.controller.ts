import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Note } from './note.model';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {


    constructor(private noteService : NoteService){}

    @Post()
    async  addNote(@Body() body)
    {
      const result = await this.noteService.addNote(body);
      return result;
    }

    @Get()
    async getAllNotes(){
        return await  this.noteService.getAllNotes();
    }

    @Get(':id')
    async getNote(@Param('id') id:string)
    {
        return await this.noteService.getNote(id);
    }

    @Delete(':id')
    async deleteNote(@Param('id') id:string)
    {
        return await this.noteService.deleteNote(id);
    }

    @Put(':id')
    async updateNote(@Param('id') id:string , @Body() body:Note)
    {
        console.log(id)
        console.log(body)
        return  await this.noteService.updateNote(id , body);
    }
  
}
