import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-shared-select',
  templateUrl: './shared-select.component.html',
  styleUrls: ['./shared-select.component.scss'],
})
export class SharedSelectComponent implements OnInit {
  @Input() Placeholder!: string;
  @Input() FormControlName!: string | number;
  @Input() Ismultiple: boolean = false;
  @Input() InputClass!: string;
  @Input() Id!: string | number;
  @Input() FormParent!: any;
  @Input() disable: boolean = false;
  @Input() isClicked!: boolean; // allow on click Function
  @Input() isChanges!: boolean; // allow in change function
  @Input() icon?: string;
  @Input() Options: any;
  @Input() Lang!: string;

  @Input() returnKey!: string;
  @Input() viewKeyAr!: string;
  @Input() viewKeyEn!: string;
  callBack: any;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.Options.currentValue?.length > 0) {
      this.Options = changes.Options.currentValue;
    }
  }

  handleOnClick(event: any) {
    this.callBack.emit((event.target as HTMLInputElement).value);
  }

  handleOnChange(event: any) {
    this.callBack.emit((event.target as HTMLInputElement).value);
  }
}
