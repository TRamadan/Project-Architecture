import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss'],
})
export class SharedButtonComponent implements OnInit {
  @Input() btnClass!: string;
  @Input() btnText!: string;
  @Input() color!: string;
  @Input() fontAwesomeClass?: string;
  @Input() disable?: any;
  @Output() CallBack: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  handleBtnEvent() {
    this.CallBack.emit('click');
  }
}
