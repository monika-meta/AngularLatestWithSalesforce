import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesforceHashLocationStrategy } from './util/sf-path-location-strategy';
import { LocationStrategy } from '@angular/common';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { StaticPathPipe } from './pipes/static-path.pipe';
import { SalesforceApiService } from './sf-api-service';

import { OtherPageComponent } from './components/other-page/other-page.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HederPageComponent } from './components/heder-page/heder-page.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    StaticPathPipe,
    FirstPageComponent,
    OtherPageComponent,
    HomePageComponent,
    HederPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    RouterModule.forRoot([
      { path: "**", component: HomePageComponent }
    ])
  ],
  providers: [
    SalesforceApiService,
    {
      provide: LocationStrategy,
      useClass: SalesforceHashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
