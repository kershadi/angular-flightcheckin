import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartcheckinComponent } from './components/startcheckin/startcheckin.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { CheckinService } from './services/checkin.service';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    StartcheckinComponent,
    CheckinComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    FormsModule
  ],
  providers: [CheckinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
