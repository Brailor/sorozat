import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DiscoverComponent } from './discover/discover.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './herosection/herosection.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { SpecresultComponent } from './specresult/specresult.component';
import { EmailComponent } from './email/email.component';
import { RecentComponent } from './recent/recent.component';
import { AlltimeComponent } from './alltime/alltime.component';

const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'discover', component: DiscoverComponent},
  {path: 'results/:name', component: ResultComponent},
  {path: 'specresult/:id', component: SpecresultComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DiscoverComponent,
    NavbarComponent,
    HeroSectionComponent,
    HomeComponent,
    ResultComponent,
    SpecresultComponent,
    EmailComponent,
    RecentComponent,
    AlltimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
