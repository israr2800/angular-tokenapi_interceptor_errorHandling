import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthDashboardComponent } from './auth-dashboard/auth-dashboard.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthGuard } from './auth.guard';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth-login',
    pathMatch: 'full',
  },
  {
    path: '', 
    component: HeaderLayoutComponent,
    children: [
      {
        path: 'auth-login',
        component: AuthLoginComponent
      },
      {
        path: 'auth-dashboard',
        component: AuthDashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
