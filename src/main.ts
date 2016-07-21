import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {GOOGLE_MAPS_PROVIDERS} from "angular2-google-maps/core";
import {disableDeprecatedForms, provideForms} from "@angular/forms";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  GOOGLE_MAPS_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
]);

