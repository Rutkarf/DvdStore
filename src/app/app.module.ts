import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './admin/adminhome/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DvdComponent } from './admin/dvd/dvd.component';
import { HomeDvdComponent } from './store/home-dvd/home-dvd.component';
import { ClientComponent } from './admin/client/client.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { FooterComponent } from './admin/footer/footer.component';
import { RegisterComponent } from './admin/register/register.component';
import { NouveauClientComponent } from './store/nouveau-client/nouveau-client.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DvdComponent,
    HomeDvdComponent,
    ClientComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    NouveauClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
