import { EnrolleeService } from './../enrollee.service';
import { EnrolleeDialogComponent } from './../enrollee-dialog/enrollee-dialog.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Enrollee } from './../enrollee.model';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-enrollee',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.css']
})
export class EnrolleeComponent implements OnInit {

  @Input() enrollee: Enrollee;
  @Output() recordUpdated = new EventEmitter<void>();

  constructor(public dialog: MatDialog, private enrolleeService: EnrolleeService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  /**
   * To get the Enrollee Details using unique ID.
   * To open a model to show the detaisl for selected Enrollee
   * Closing modal will give the  result as "Update" or undefined
   * If the result is "Update" means the Enrolle is updated and
   * event can be emmited to refresh the page using ngOnIt
   *
   * @param id -string, uuid - Enrollee Id
   */
  openFormDialog(id: string): void {

    this.enrolleeService.getEnrolleeDetails(id)
      .subscribe(response => {

        const dialogRef = this.dialog.open(EnrolleeDialogComponent, {
          width: '50%',
          data: response
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result && result === 'UPDATED') {
            this.recordUpdated.next();
          }
        });
      }, error => {
        this.snackBar.open('Something went wrong fecthing the Enrollee Details!!! Please try after sometime',
         null,
        { duration: 3000 });
        console.log(error);
      });


  }
}
