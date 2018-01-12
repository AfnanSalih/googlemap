import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
 import { Geolocation } from '@ionic-native/geolocation';
 
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
   
  map:GoogleMap;
  lat=0;
  long=0;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform:Platform,
              public geolocation:Geolocation) {
             
             
  }

  ionViewDidLoad(){
   this.platform.ready().then(()=>{
      this.loadmap();
   })

  }

  loadmap(){

    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.long = resp.coords.longitude
     

    this.map=new GoogleMap('map',{
     'controls':{
       'compass':true,
       'myLocationButton':true,
       'indoorPicker':true,
       'zoom':true
     },
     'gestures':{
       'scroll':true,
       'tilt':true,
       'rotate':true,
       'zoom':true
     },
     'camera':{
      target: {
        lat: this.lat,
        lng: this.long
      },
      zoom: 18,
      tilt: 30,
      'bearing':50
      }
  
    });

  }).catch((error) => {
    console.log('Error getting location', error);
  });



    this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{
      console.log('Map is ready ....');
    })
  }





}
