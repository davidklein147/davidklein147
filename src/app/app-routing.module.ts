import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputWordComponent } from './inputs/components/input-word/input-word.component';
import { LogUpComponent } from './user/components/log-up/log-up.component';
import { LoginComponent } from './user/components/login/login.component';
import { NavigationComponent } from './user/components/navigation/navigation.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "logup", component: LogUpComponent},
  {
    path: "n", component: NavigationComponent,
    children:[
      {path: "inputs", component: InputWordComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
