import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MyDataProvider } from '../../providers/my-data-provider';
import { MyData } from '../../providers/my-data';
import { NgForm } from '@angular/forms';

/*
  Generated class for the Test page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  myData: MyData = new MyData('', '');

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private myDataProvider:MyDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  addData(form: NgForm): void {
    if (form.valid) {
      let newData = new MyData('', form.value.name);
      let promise:firebase.Promise<any> = this.myDataProvider.addNewData(newData);
      //promise.then((value: any) => { this.dismiss(newData);
      //                               this.item = new MyData('', ''); },
      //             (error: any) => { this.showFailAlert(error); });
    }

    console.log('form.value=' + JSON.stringify(form.value));
    console.log('form.valid=' + JSON.stringify(form.valid));
  }


}
