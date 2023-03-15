import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  {
    path: 'View',
    loadChildren: () =>
      import('./mainView/mainView.module').then((m) => m.MainViewModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
