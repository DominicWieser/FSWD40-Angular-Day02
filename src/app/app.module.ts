import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
	apiKey: "AIzaSyCZ8c_lN7LfGmptEYE0EXgqox-BayBVS-s",
    authDomain: "myfoodapp-b7797.firebaseapp.com",
    databaseURL: "https://myfoodapp-b7797.firebaseio.com",
    projectId: "myfoodapp-b7797",
    storageBucket: "myfoodapp-b7797.appspot.com",
    messagingSenderId: "1015531804154"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
   	AngularFireModule.initializeApp(firebaseConfig),
   	AngularFireAuthModule,
   	AngularFireDatabaseModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
