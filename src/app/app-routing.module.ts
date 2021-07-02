import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'auth/signup', canActivate:[AuthGuardService], component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'user-list', canActivate:[AuthGuardService], component: UserListComponent },
  { path: 'updateUser/:id', canActivate:[AuthGuardService], component: UpdateUserComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: '**', redirectTo: 'accueil' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
