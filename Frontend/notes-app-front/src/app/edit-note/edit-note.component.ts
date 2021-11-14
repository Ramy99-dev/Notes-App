import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DialogRef } from '@ngneat/dialog';
import { Editor, Toolbar, Validators } from 'ngx-editor';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  public form : FormGroup;
  constructor(private formBuilder: FormBuilder  , public ref: DialogRef , private noteService:NoteService    ) {
    this.form = this.formBuilder.group({
      
      editorContent: new FormControl(
        { value: this.ref.data.content, disabled: false },
        Validators.required()
      )
    })
   }

   notes = [];

  



 

  editor: Editor;
  toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];

 

  get doc(): AbstractControl {
    return this.form.get("editorContent");
  }

  ngOnInit(): void {
    this.editor = new Editor();
    console.log(this.ref.data);
  }

  edit()
  {
    console.log("edit")
    let contentHTML =this.form.value.editorContent
    let newPost = {
      content: contentHTML
    }
    console.log(newPost)
    this.noteService.editNote(this.ref.data.id,newPost).subscribe((result)=>{
      console.log(result)
    })
  }
}
