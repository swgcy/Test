import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from 'firebase';

import { MyData } from './my-data';

/*
  Generated class for the MyDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyDataProvider {

  // Firebase インスタンス
  private fdb: firebase.database.Database;

  // Initialize Firebase
  private static readonly config = {
    apiKey: 'AIzaSyB08F6zW19ALeLePrXODyCzpafC6wr4FNU',
    authDomain: 'integral4-c87c9.firebaseapp.com',
    databaseURL: 'https://integral4-c87c9.firebaseio.com',
    storageBucket: 'integral4-c87c9.appspot.com',
    messagingSenderId: '936389056716'
  };

  constructor(public http: Http) {
    console.log('Hello MyDataProvider Provider');

    firebase.initializeApp(MyDataProvider.config);
    this.fdb = firebase.database();
  }


  addNewData(myData: MyData): firebase.Promise<any> {
    let key = this.fdb.ref('myDatas').push().key;

    let newData = {};
    newData['/myDatas/' + key] = {
      name: myData.name
    }

    // Itemを登録する
    return this.fdb.ref().update(newData);
  }




}
