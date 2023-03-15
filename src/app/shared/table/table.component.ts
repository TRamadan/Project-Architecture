import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KeyData } from '../../models/keyData';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  holdImgToView!: string;
  @Input() isHidden: boolean = true;

  @Input() tableClass!: string;
  @Input() tableHeaderList!: any;
  @Input() listofObject!: KeyData[];
  @Input() tableBodyList!: any;
  @Input() tableHeadderClass?: string;
  @Input() isEditable: boolean = false;
  @Input() isDeleteble: boolean = false;
  @Input() isAdding: boolean = false;
  @Input() isShowing: boolean = false;
  @Input() isViewed: boolean = false;
  @Input() isList: boolean = false;
  @Output() callbackEdit: EventEmitter<any> = new EventEmitter();
  @Output() callbackDelete: EventEmitter<any> = new EventEmitter();
  @Output() callbackAdded: EventEmitter<any> = new EventEmitter();
  @Output() callbackShow: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  handleEitMode(rowData: any) {
    this.callbackEdit.emit(rowData);
  }

  handleDeleiteMode(rowData: any) {
    this.callbackDelete.emit(rowData);
  }

  handleAddMode(rowData: any) {
    this.callbackAdded.emit(rowData);
  }
  handleShowModel(rowData: any) {
    this.callbackShow.emit(rowData);
  }

  open(content: any, url: string) {
    this.holdImgToView = url;
    this.modalService.open(content, { size: 'lg', centered: true });
  }
}
