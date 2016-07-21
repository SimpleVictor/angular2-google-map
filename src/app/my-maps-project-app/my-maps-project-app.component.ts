import { Component } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

@Component({
  moduleId: module.id,
  selector: 'my-maps-project-app',
  templateUrl: 'my-maps-project-app.component.html',
  styleUrls: ['my-maps-project-app.component.css'],
  directives: [GOOGLE_MAPS_DIRECTIVES]
})
export class MyMapsProjectAppComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
}
