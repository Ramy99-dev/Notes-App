import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxEditorModule } from 'ngx-editor';
import { DialogModule } from '@ngneat/dialog';

import { HttpClientModule } from '@angular/common/http';


import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { SafeHtmlPipe } from './safe-html.pipe';
import { EditNoteComponent } from './edit-note/edit-note.component';

@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe,
    EditNoteComponent,
    
  ],
  imports: [
    NgxEditorModule,
    DragDropModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule.forRoot({
      sizes: {
        sm: {
          width: 300, // 300px
          minHeight: 250 // 250px
        },
        md: {
          width: '80vw',
          height: '70vh'
        },
        lg: {
          width: '90vw',
          height: '90vh'
        },
        fullScreen: {
          width: '100vw',
          height: '100vh'
        },
        stretch: {
          minHeight: 500,
          maxHeight: '85%'
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
