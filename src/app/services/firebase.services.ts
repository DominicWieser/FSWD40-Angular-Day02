import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
@Injectable()
export class FirebaseService{
  foods: FirebaseListObservable<Foods[]>;
  constructor(private af: AngularFireDatabase) {
    
  }
  getFoods() {
      this.foods= this.af.list('/foods') as FirebaseListObservable<Foods[]>;
      return this.foods;
  }
}

export interface Foods {
  $key?: number;
  name?: string;
  vitamins?: string;
  category?: string;
}