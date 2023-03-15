import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './mainView.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: 'Home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule {}
