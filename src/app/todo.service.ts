import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos$: BehaviorSubject<any[]>;
  
  update(todo: any) {
    //this.todos$.next()
    //moet de update ook naar de server
    this.firestore.collection('todos').doc(todo.id).update(todo);
  }

  constructor(private firestore: AngularFirestore) { 
    this.todos$ = this.getTodos();
  }

  getTodos(){
    return this.firestore.collection('todos')
      .snapshotChanges()
      .pipe(map((todos: any[]) => {
        return todos.map(todo => {
          const data = todo.payload.doc.data();
          let id = todo.payload.doc.id;
          return { id, ...data };
        });
      }));
  }
}


