import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardService, NgxChessBoardView } from 'ngx-chess-board';

@Component({
  selector: 'app-ichess',
  templateUrl: './ichess.component.html',
  styleUrls: ['./ichess.component.css'],
})
export class IchessComponent {
  constructor(private ngxChessBoardService: NgxChessBoardService) {}
  @ViewChild('board', { static: false })
  board: NgxChessBoardView;

  @HostListener('window:message', ['$event'])
  handleMessage(event: MessageEvent) {
    switch (event.data) {
      case 'reset':
        this.reset();
        break;
      default:
        this.board.setFEN(event.data);
    }
    if (event.data === 'reset') {
      this.board.reset();
    }
  }

  moved() {
    // send message to parent
    const history = this.board.getMoveHistory();
    if (history[history.length - 1].mate) window.parent.postMessage('mate');
    window.parent.postMessage(this.board.getFEN());
  }

  reset() {
    this.ngxChessBoardService.reset();
  }
}
