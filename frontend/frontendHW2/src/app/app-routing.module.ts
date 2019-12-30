import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListSweetComponent} from './list-sweet/list-sweet.component';
import {EditSweetComponent} from './edit-sweet/edit-sweet.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {ListResellerComponent} from './list-reseller/list-reseller.component';
import {EditResellerComponent} from './edit-reseller/edit-reseller.component';
import {SweetOptionsResolver} from './resolver/sweet-options-resolver';
import {BrandOptionsResolver} from './resolver/brand-options-resolver';


const routes: Routes = [
  {path: 'list-sweet', component: ListSweetComponent, canActivate: [AuthGuard]},
  {
    path: 'edit-sweet', component: EditSweetComponent, canActivate: [AuthGuard],
    resolve: {
      brandOptions: BrandOptionsResolver,
    }
  },
  {
    path: 'edit-sweet/:id', component: EditSweetComponent, canActivate: [AuthGuard],
    resolve: {
      brandOptions: BrandOptionsResolver,
    }
  },
  {path: '', redirectTo: 'list-sweet', pathMatch: 'full'},
  {path: 'list-reseller', component: ListResellerComponent, canActivate: [AuthGuard]},
  {
    path: 'edit-reseller', component: EditResellerComponent, canActivate: [AuthGuard],
    resolve: {
      sweetOptions: SweetOptionsResolver,
    }
  },
  {
    path: 'edit-reseller/:id', component: EditResellerComponent, canActivate: [AuthGuard],
    resolve: {
      sweetOptions: SweetOptionsResolver,
    }
  },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
