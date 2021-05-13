import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    // RouterModule.forRoot([
    //   { path: '', component: HomePageComponent },
    //   { path: '**', redirectTo: '', pathMatch: 'full' }
    // ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
