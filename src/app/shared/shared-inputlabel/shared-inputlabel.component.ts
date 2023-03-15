import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-inputlabel',
  templateUrl: './shared-inputlabel.component.html',
  styleUrls: ['./shared-inputlabel.component.scss'],
})
export class SharedInputlabelComponent implements OnInit {
  @Input() Label!: string;

  constructor() {}

  ngOnInit(): void {}
}
