import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {ErrorComponent} from "./error/error.component";
import {HomeComponent} from "./home/home.component";
import {appUrlmatcher} from "./app-routing.urlmatcher";
import {SigninComponent} from "./signin/signin.component";

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: 'login', component: SigninComponent, pathMatch: "full"},
  {
    matcher: appUrlmatcher, component: WelcomeComponent,
    children: [
      {path: 'home', component: HomeComponent, pathMatch: "full"},
    ]
  },
  {path: "error", component: ErrorComponent, pathMatch: "full"},
  {path: "**", redirectTo: "error", pathMatch: "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
