import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface PeriodicElement {
  PURPOSE: string;
  DATE: string;
  AMOUNT: number;
  DETAIL: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { PURPOSE: 'Food/Drink', DATE: 'October 8, 2018', AMOUNT: 35.89, DETAIL: 'DETAILS' },
  { PURPOSE: 'Hotel', DATE: 'October 8, 2018', AMOUNT: 235.89, DETAIL: 'DETAILS' },
  { PURPOSE: 'Getting to Venue', DATE: 'October 8, 2018', AMOUNT: 87.56, DETAIL: 'DETAILS' },
];


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  displayedColumns: string[] = ['PURPOSE', 'DATE', 'AMOUNT', 'DETAIL'];
  dataSource = ELEMENT_DATA;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}