import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxChessBoardView, NgxChessBoardService } from 'ngx-chess-board';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
