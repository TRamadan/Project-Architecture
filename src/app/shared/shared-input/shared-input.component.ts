import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shared-input',
  templateUrl: './shared-input.component.html',
  styleUrls: ['./shared-input.component.scss'],
})
export class SharedInputComponent implements OnInit {
  @Input() Type!: string;
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
    if (this.isFile == true) {
      let x = this.handleFile(value);
    } else {
      this.callBack.emit(value.target.value);
    }
  }

  handleOnFocus(value: any) {
    this.callBack.emit(value.target.value);
  }

  async handleFile(event: any) {
    // let file = await toBase64(event.target.files[0]);
    // this.callBack.emit(file);
  }
}
