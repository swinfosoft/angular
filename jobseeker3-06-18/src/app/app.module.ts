import { BrowserModule} from '@angular/platform-browser';
import {UserService} from './shared';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import {SharedModule} from './shared';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Route,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//creating routes array
const appRoutes:Route[]=[
  { path:'', redirectTo:'register',pathMatch:'full'},
  { path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
