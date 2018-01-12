import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-showneeding',
  templateUrl: 'showneeding.html',
})
export class ShowneedingPage {

  myInfo = {
    key : '',
    firstname : '',
    lastname : '',
    infor : '',
    phone:'',
    address:''
    
    
  }


  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.myInfo.key = this.navParams.get('key')
    this.myInfo.firstname = this.navParams.get('firstname')
    this.myInfo.lastname = this.navParams.get('lastname')
    this.myInfo.infor = this.navParams.get('infor') 
    this.myInfo. phone = this.navParams.get(' phone')  
    this.myInfo.address = this.navParams.get(' address')
 
   
  



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowneedingPage');
  }

}
