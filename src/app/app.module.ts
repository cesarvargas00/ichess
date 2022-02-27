import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChessBoardModule } from 'ngx-chess-board';

import { AppComponent } from './app.component';
import { IchessComponent } from './ichess/ichess.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, IchessComponent, HomeComponent],
  imports: [BrowserModule, NgxChessBoardModule.forRoot(), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
