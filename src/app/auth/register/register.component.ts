import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from '../../models/Car';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  Cars: Car[] = [];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initregisterForm();
  }

  initregisterForm() {
    this.registerForm = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      birthDate: [null, Validators.required],
      favoiraitCar: [null, Validators.required],
      username: [null, Validators.required],
    });
    this.fetchcardata();
  }

  doneregister(): void {
    console.log(this.registerForm.value);
  }

  fetchcardata(): void {
    this.Cars = [
      {
        id: 1,
        model: 'Merceides c200',
        plateNumber: 'abc - kkdm',
        createdAtDate: '3-3-2003',
      },

      {
        id: 2,
        model: 'Renault fluence',
        plateNumber: 'abc - kkdm',
        createdAtDate: '3-4-2003',
      },

      {
        id: 3,
        model: 'Toyota CHR',
        plateNumber: 'abc - kkdm',
        createdAtDate: '3-4-2003',
      },
    ];
  }

  redirecttoLogin() {
    this.router.navigate(['/auth/login']);
  }
}
