import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('signUpForm', { static: false }) signUpForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];

  onSignUpFormSubmit(formData: NgForm) {
    console.log(formData.value);
  }

  onSignUpFormReset() {
    this.signUpForm.reset({
      emailAddress: '',
      subscription: this.subscriptions[1],
      password: ''
    });
  }
}
