import { Component, OnInit } from '@angular/core';

import { Enrollee } from './enrollee.model';
import { EnrolleeService } from './enrollee.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-enrollees-list',
  templateUrl: './enrollees-list.component.html',
  styleUrls: ['./enrollees-list.component.css']
})
export class EnrolleesListComponent implements OnInit {

  selected = 'ALL';
  enrollees: Enrollee[] = [];

  constructor(private enrolleeService: EnrolleeService, private snackBar: MatSnackBar) { }

  /**
   * Fecth and assign the enrolless List to the property once the component is loaded.
   */
  ngOnInit(): void {
    this.enrolleeService.getEnrollees()
      .subscribe((response) => {
        this.enrollees = response;
      }, error => {
        this.snackBar.open('Something went wrong!!! Please try after sometime', null, { duration: 3000 });
        console.log(error);
      });
  }

  /**
   * Trigger ngOnInit to bring new Set of Enrollee once an Enrollee is updted.
   */
  onRecordUpdated(): void {
    this.ngOnInit();
  }

}
