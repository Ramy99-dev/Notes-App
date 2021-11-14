import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteModule } from './note/note.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
              NoteModule,
              MongooseModule.forRoot(process.env.DATABASE_URL) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
