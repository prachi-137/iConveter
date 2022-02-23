import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { FooterComponent } from './mycomponents/footer/footer.component';
import { ToolsComponent } from './mycomponents/tools/tools.component';
import { AboutComponent } from './mycomponents/about/about.component';
import { LoginComponent } from './mycomponents/login/login.component';
import { SignupComponent } from './mycomponents/signup/signup.component';
import { ContactComponent } from './mycomponents/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ToolsComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
