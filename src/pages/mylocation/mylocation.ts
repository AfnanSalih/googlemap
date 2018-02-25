import { Component ,ViewChild ,ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


declare var google;


@Component({
  selector: 'page-mylocation',
  templateUrl: 'mylocation.html',
})
export class MylocationPage {
    
  @ViewChild('map') mapElement:ElementRef;
  map: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
   
  }

  ionViewDidLoad() {
    this.displayGoogleMap();
    this.getmarkers();
  }


  displayGoogleMap(){
    let latLng = new google.maps.LatLng(33.937663,44.630127);
    let mapOption={
      center:latLng,
      zoom:10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

  

    this.map=new google.maps.Map(this.mapElement.nativeElement,mapOption);
  }

getmarkers(){
  this.http.get('assets/data/markers.json').map((res)=>res.json()).subscribe(data=>{
    this.addMarkersMap(data);
  })
}
addMarkersMap(markers){

for(let marker of markers){
  var loc ={lat:marker.latitude , lng:marker.longitude}
  marker=new google.maps.Marker({
    position :loc,
    map : this.map,
    title : marker.title,
    label : marker.details,
    

  });
//////


  let infoWindow = new google.maps.InfoWindow({
    content : marker.details,
    maxWidth: 200,

    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
      });
  
//////
}
}




}
