import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthRedirectGuard } from './core/guards/auth-redirect.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthRedirectGuard],
  },
  {
    path: 'admin', // When user visits /admin, this will load the LayoutModule
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
    canActivate: [AuthGuard], // Ensure that only authorized users can access /admin routes
  },
  {
    path: '**',  // Wildcard route for handling any other unexpected routes
  redirectTo: '/',  // Redirect any unknown routes to login
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
