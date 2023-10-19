import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './admin/adminhome/home.component';
import { HomeDvdComponent } from './store/home-dvd/home-dvd.component';
import { ClientComponent } from './admin/client/client.component';
import { DvdComponent } from './admin/dvd/dvd.component';
import { NouveauClientComponent } from './store/nouveau-client/nouveau-client.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
{
    path :'login',
    component: LoginComponent
  },
{
    path:'HomeStore',
    component: HomeDvdComponent
  },
{
    path:'user/all',
    component: ClientComponent
  },
{
    path:'dvd',
    component: DvdComponent
  },
{
    path:'user/add',
    component: NouveauClientComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
