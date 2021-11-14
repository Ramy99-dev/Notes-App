import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private _http :HttpClient) { }

  getAllNotes():Observable<any>
  {
    return this._http.get('http://localhost:3000/note');
  }

  addNote(newNote):Observable<any>
  {
    return this._http.post('http://localhost:3000/note',newNote)
  }

  deleteNote(id:string):Observable<any>
  {
    return this._http.delete(`http://localhost:3000/note/${id}`)
  }


  editNote(id:string,newNote):Observable<any>
  {
    return this._http.put(`http://localhost:3000/note/${id}`,newNote)
  }
  
}
