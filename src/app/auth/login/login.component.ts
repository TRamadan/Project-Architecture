import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuccessErrorService } from '../../shared/success-error/success-error.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  durationInSeconds: number = 5;
  loginForm!: FormGroup;

  constructor(
    private success_error: SuccessErrorService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initialiseForm();
  }

  //here is the function needed to initialise the form needed for login
  //this function is responsible for declaring the formcontrols needed to be used to the form
  initialiseForm() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  //this function is responsible for make user able to login
  //this function call a http request which is responsible for login
  //this function use a const variable called body
  //this variable called body , resposnbile for the login function service
  Login(btnEvent: Event): void {
    const body = {
      //here will be the username || the email,
      username: 'Tarek',
      //here is the authenticated password
      password: '123456',
    };
    //api function call go here
    this.router.navigate(['./View/Home/products']);

    //to get a success or error message
    //1- inject an instance form a service called , succes-error service
    //2- incase of error call a function from the service responsible for error
    //called showErrormsg
    //3- in case of success call a function from the service responsible for success
    //called showSuccessmsg
    this.success_error.showSuccessmsg();
  }

  //this function use to call the route needed to redirect to the register page to add a new user
  navigatetoRegister(btnEvent: Event) {
    this.router.navigate(['/auth/register']);
  }
}
