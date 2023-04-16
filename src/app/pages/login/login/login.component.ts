import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private builder: FormBuilder) {
    this.buildForm()
  }

  ngOnInit():void {
    this.form.valueChanges
    .subscribe(value => {
      // console.log(value);
      
    })
  }

  buildForm() {
    this.form = this.builder.group({
      email: ["",[Validators.required, Validators.email]],
      password: ["",[Validators.required, Validators.minLength(7)]]
    });
  };
  send():any {
    if(this.form.valid) {
      console.log(this.form.value);
    }else{
      this.form.markAllAsTouched()
      return false
    }
  }
}