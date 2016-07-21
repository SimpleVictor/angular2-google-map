import {Component, OnInit} from '@angular/core';
import {MyMapsProjectAppComponent} from "./my-maps-project-app/my-maps-project-app.component";
import {MyFormComponent} from "./my-form/my-form.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MyMapsProjectAppComponent, MyFormComponent]
})
export class AppComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): any{

  }

}
