import {} from 'googlemaps';
import { ScriptLoaderService } from 'src/app/shared/utils/script-loader.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'cfas-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {
  @ViewChild('gmap', { static: true }) gmapElement: any;

  ngOnInit() {
    ScriptLoaderService.loadScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAssdDyTMv1qIVBBWTEeiETjFt40aBRnY4'
    ).then(() => {
      setTimeout(() => {
        const mapProp: google.maps.MapOptions = {
          center: new google.maps.LatLng(47.651281, 9.503248),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          gestureHandling: 'cooperative',
        };
        const map = new google.maps.Map(
          this.gmapElement.nativeElement,
          mapProp
        );

        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(47.651281, 9.503248),
          map,
          title: 'CrossFit am See in Friedrichshafen',
        });

        const infoWindow = new google.maps.InfoWindow({
          content:
            `<div class="pr-2 pb-2 text-center"><div><strong>CrossFit am See</strong></div>
            <div class="mt-1">in Friedrichshafen</div></div>`,
        });
        infoWindow.open(map, marker);
      }, 750);
    });
  }
}
