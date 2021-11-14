import { Module } from '@nestjs/common';
import { NoteController } from './note/note.controller';
import { NoteService } from './note/note.service';
import { MongooseModule } from '@nestjs/mongoose';
import { noteSchema } from './note/note.model';

@Module({
  imports:[ MongooseModule.forFeature([{name:"Note",schema:noteSchema}])],
  controllers: [NoteController],
  providers: [NoteService]
})
export class NoteModule {}
