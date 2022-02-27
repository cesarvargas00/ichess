import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  constructor(private sanitizer: DomSanitizer) {
    this.ichess = this.sanitizer.bypassSecurityTrustResourceUrl('/chess');
  }
  ichess: SafeResourceUrl;
  mate = false;
  @ViewChild('chess1') chess1: ElementRef;
  @ViewChild('chess2') chess2: ElementRef;

  @HostListener('window:message', ['$event'])
  handleMessage(event: MessageEvent) {
    if (event.data === 'mate') {
      this.mate = true; // FIXME: whenever its mate and the person reloads the page, it
    } else if (typeof event.data === 'string') {
      window.localStorage.setItem('chess', event.data);
    }
    this.updateBoards(event.data);
  }

  reset() {
    window.localStorage.removeItem('chess');
    this.mate = false;
    this.updateBoards('reset');
  }

  updateBoards(message: string) {
    this.chess1.nativeElement.contentWindow.postMessage(message);
    this.chess2.nativeElement.contentWindow.postMessage(message);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const chess = window.localStorage.getItem('chess');
      if (chess) {
        this.updateBoards(chess);
      }
    }, 900); //FIXME: ugly hack, find a better way using angular to know when child loaded completely
  }
}
