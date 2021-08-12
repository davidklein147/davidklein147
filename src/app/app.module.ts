import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogUpComponent } from './user/components/log-up/log-up.component';
import { LoginComponent } from './user/components/login/login.component';
import { InputWordComponent } from './inputs/components/input-word/input-word.component';
import { NavigationComponent } from './user/components/navigation/navigation.component';
import { FormComponent } from './inputs/smartForm/form/form.component';
import { DailyRepetiComponent } from './repetition/components/daily-repeti/daily-repeti.component';

@NgModule({
  declarations: [
    AppComponent,
    LogUpComponent,
    LoginComponent,
    InputWordComponent,
    NavigationComponent,
    FormComponent,
    DailyRepetiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
