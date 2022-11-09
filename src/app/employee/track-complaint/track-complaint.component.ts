import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-track-complaint',
  templateUrl: './track-complaint.component.html',
  styleUrls: ['./track-complaint.component.css']
})

export class TrackComplaintComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  displayedColumns: string[] = ['position', 'id', 'subject', "action"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  openDialog(id: any) {
    const dialogRef = this.dialog.open(DialogContentDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
export interface PeriodicElement {
  id: string;
  position: number;
  subject: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, id: 'Hydrogen', subject: 'dghhtytr ytry ryt ryr yr H' },
  { position: 2, id: 'Helium', subject: ' ytry ryt ryr yr H' },
  { position: 3, id: 'Lithium', subject: 'dghhtytr ytry ryt' },
  { position: 4, id: 'Beryllium', subject: 'rty ytry ryt ryr yr H' },
  { position: 5, id: 'Boron', subject: 'B' },
  { position: 6, id: 'Carbon', subject: 'C' },
];


@Component({
  selector: 'dialog-content-dialog',
  templateUrl: 'track-dialog-content.html',
})
export class DialogContentDialog { }