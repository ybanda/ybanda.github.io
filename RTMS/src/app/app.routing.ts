import {Router,RouterModule} from '@angular/router';


import {PageNotFoundComponent} from './page-notfound.component';
import {ChangePasswordFormComponent} from './changePassword-form.component';

export const routing =RouterModule.forRoot([
  { path :'login',
  component:ChangePasswordFormComponent},
  { path: '',redirectTo: '/login',pathMatch: 'full'},
  { path: 'nonexistent',redirectTo:'/login',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
]);