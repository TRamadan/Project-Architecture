import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shared-inputDate',
  templateUrl: './shared-inputDate.component.html',
  styleUrls: ['./shared-inputDate.component.scss'],
})
export class SharedInputDateComponent implements OnInit {
  @Input() Type!: string;
  @Input() appearance!: string;
  startDateMin = new Date();

  @Input() Placeholder!: string;
  @Input() inputmax!: string;
  @Input() FormControlName!: string | number;
  @Input() InputClass!: string;
  @Input() isFile: boolean = false;
  @Input() Id!: string | number;
  @Input() FormParent!: FormGroup;
  @Input() userValue?: string;
  @Input() disable: boolean = false;
  @Input() isClicked!: boolean; // allow on click Function
  @Input() isChanges!: boolean; // allow in change function
  @Input() isFocused!: boolean; // allow focused function
  @Input() icon?: string;
  @Input() Lang?: string;
  @Output() callBack: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  handleOnClick(value: any) {
    this.callBack.emit(value.target.value);
  }

  handleOnChange(value: any) {
    this.callBack.emit(value.target.value);
  }

  handleOnFocus(value: any) {
    this.callBack.emit(value.target.value);
  }
}
