import { EnrolleeService } from './../enrollee.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Enrollee } from './../enrollee.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-enrollee-dialog',
  templateUrl: './enrollee-dialog.component.html',
  styleUrls: ['./enrollee-dialog.component.css']
})
export class EnrolleeDialogComponent implements OnInit {

  enrolleeForm: FormGroup;
  status: {id: number, value: string, label: string}[] = [
    {
      id: 1,
      value: 'ACTIVE',
      label: 'ACTIVE'
    },
    {
      id: 2,
      value: 'INACTIVE',
      label: 'INACTIVE'
    },
  ];
  isButtonDisabled = false;

  constructor(public dialogRef: MatDialogRef<EnrolleeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Enrollee, private enrolleeServie: EnrolleeService, private snackBar: MatSnackBar) { }

    /**
     * Initialize the form with the Enrollee data provided once the component is mounted
     * Reactive Forms Approach
     */
  ngOnInit(): void {
    this.enrolleeForm = new FormGroup({
      name: new FormControl(this.data.name, [Validators.required, Validators.minLength(3), Validators.maxLength(49)]),
      status: new FormControl(this.data.active ? 'ACTIVE' : 'INACTIVE', [Validators.required]),
    });
  }

  /**
   * On close Dialog box action
   * @param updated  - string - "UPDATED" if the enrollee is updated or null
   */
  onNoClick(updated): void {
    this.dialogRef.close(updated);
  }

  /**
   * On Submit the form details to update the selected Enrollee
   * and close the Dialog
   */
  onSubmit(): void {
    const {  name, status } = this.enrolleeForm.value;
    const {id, dateOfBirth} = this.data;
    const updatedData = {
      dateOfBirth,
      name,
      active : status === 'ACTIVE' ? true : false
    };
    this.isButtonDisabled = true;
    this.enrolleeServie.updateEnrollee(updatedData, id)
    .subscribe(response => {
      this.isButtonDisabled = false;
      this.snackBar.open('Enrollee Updated SuccessFully', null, {duration: 3000});
      this.onNoClick('UPDATED');
    }, error => {
      this.isButtonDisabled = false;
      this.snackBar.open('Something went wrong!!! Please try after sometime', null, {duration: 3000});
      console.log(error);
      this.onNoClick(null);
    });
  }

}
