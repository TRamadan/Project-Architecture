import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
import { AppRedDirective } from '../Directives/appRed.directive';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmptyTableComponent } from './empty-table/empty-table.component';
import { SharedButtonComponent } from './shared-button/shared-button.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModalComponent } from './shared-modal/shared-modal.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedLoaderComponent } from './shared-loader/shared-loader.component';
import { SharedInputComponent } from './shared-input/shared-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedInputDateComponent } from './shared-inputDate/shared-inputDate.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SharedInputlabelComponent } from './shared-inputlabel/shared-inputlabel.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { SharedSelectComponent } from './shared-select/shared-select.component';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    TableComponent,
    EmptyTableComponent,
    AppRedDirective,
    SharedButtonComponent,
    PageTitleComponent,
    SharedModalComponent,
    SharedInputComponent,
    SharedLoaderComponent,
    SharedInputDateComponent,
    SharedInputlabelComponent,
    SharedSelectComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    TableComponent,
    EmptyTableComponent,
    SharedButtonComponent,
    PageTitleComponent,
    SharedModalComponent,
    SharedInputComponent,
    SharedLoaderComponent,
    SharedInputDateComponent,
    SharedInputlabelComponent,
    SharedSelectComponent,
  ],
  providers: [],
})
export class SharedModule {}
