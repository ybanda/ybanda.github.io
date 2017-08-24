import {BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule}  from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AppComponent }   from './app.component';

import {LoggerService} from './core/logger.service';
import {NavBarComponent} from './navbar/navbar.component';
import {PageNotFoundComponent} from './page-notfound.component'

import {ChangePasswordFormComponent} from './changePassword-form.component';

import {routing} from './app.routing';

@NgModule({
  imports:      [ NgbModule.forRoot(),
                  BrowserModule,
                  FormsModule,
                  ReactiveFormsModule,
                  HttpModule,
                     
                routing],
  declarations: [ AppComponent, 
                  NavBarComponent,
                  PageNotFoundComponent,
                  ChangePasswordFormComponent
                ],
  providers:    [ LoggerService],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  
 }
