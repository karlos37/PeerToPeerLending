import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
  {path: "sign-up", component: SignupComponent},
  {path: "", redirectTo: "howdy", pathMatch: "full"}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
