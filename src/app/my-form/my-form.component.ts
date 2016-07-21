import { Component, OnInit } from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'app-my-form',
  templateUrl: 'my-form.component.html',
  styleUrls: ['my-form.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class MyFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.myForm = _formBuilder.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'email': ['', Validators.required],
      'state': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.myForm.value);
  }
}

