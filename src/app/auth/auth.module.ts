import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthRoutingModule } from './auth-routing.module';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  exports: [LoginComponent],
})
export class AuthModule {}
