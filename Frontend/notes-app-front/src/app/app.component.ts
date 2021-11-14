import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Validators, Editor, Toolbar } from "ngx-editor";
import { DialogService } from '@ngneat/dialog';
import { NoteService } from "./note.service";
import { EditNoteComponent } from "./edit-note/edit-note.component";
import { Router } from "@angular/router";



@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
  encapsulation: ViewEncapsulation.None  
})
export class AppComponent implements OnInit, OnDestroy {
  public form : FormGroup;
  content:string;
  constructor(private formBuilder: FormBuilder  , private noteService:NoteService ,  private dialog: DialogService , private router:Router   ) {
    this.form = this.formBuilder.group({

      editorContent: new FormControl(
        { value: '', disabled: false },
        Validators.required()
      )
    })
   }

   notes = [];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.notes, event.previousIndex, event.currentIndex);
  }



 

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
    
    this.noteService.getAllNotes().subscribe((result)=>{
      console.log(result)
        this.notes=result

    })
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }


  delete(i:number , id:string)
  {
    console.log(i)
    this.notes.splice(i,1);
    console.log(id)
    this.noteService.deleteNote(id).subscribe((result)=>{
      console.log(result)
    })
  }
  add()
  {

   
    let contentHTML =this.form.value.editorContent
    let newPost = {
      content: contentHTML
    }
    
    this.notes.push({content:contentHTML})
    
    this.noteService.addNote(newPost).subscribe((result)=>{
      this.editor.setContent('') 
      this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this.router.navigate(['']);
    }); 
      
    })
    
  
 
    
  }

  openEdit(note)
  {
    let notedata = {content:note.content , id:note._id}
    const dialogRef = this.dialog.open(EditNoteComponent , {data:notedata} );
    dialogRef.afterClosed$.subscribe(result => {
      this.ngOnInit()
    });
    dialogRef.backdropClick$.subscribe(() => {
      this.ngOnInit()
    });
    
  }
 
}


