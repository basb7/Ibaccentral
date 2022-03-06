import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './Component/menu/menu.component';
import { HomeComponent } from './Component/home/home.component';
import { LocationComponent } from './Component/location/location.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ubicacion', component: LocationComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
