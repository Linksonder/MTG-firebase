import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public email: string;
  public password: string;

  constructor(public auth: AngularFireAuth) {}

  login() {
    this.auth.signInWithEmailAndPassword(this.email, this.password);

    this.auth.user.subscribe(user => {
      console.log(user);
    });
    
  }

  logout(){
    this.auth.signOut();
  }

}
