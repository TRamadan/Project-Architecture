import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './mainView.component';
import { SharedModule } from '../shared/shared.module';
import { ViewRoutingModule } from './mainView-routing.module';
@NgModule({
  imports: [CommonModule, SharedModule, ViewRoutingModule],
  declarations: [MainViewComponent],
})
export class MainViewModule {}
