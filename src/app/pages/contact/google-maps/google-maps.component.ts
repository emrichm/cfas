import {} from 'googlemaps';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'cfas-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {
  @ViewChild('gmap', { static: true }) gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(47.651281, 9.503248),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    const marker = new google.maps.Marker(
      {
        position: new google.maps.LatLng(47.651281, 9.503248),
        map: this.map,
        title: 'CrossFit am See in Friedrichshafen'
      });

    const infoWindow = new google.maps.InfoWindow(
      {
        content:
          '<div class="text-center"><div><strong>CrossFit am See</strong></div><div class="mt-1">in Friedrichshafen</div></div>'
      });
    infoWindow.open(this.map, marker);
  }

}
