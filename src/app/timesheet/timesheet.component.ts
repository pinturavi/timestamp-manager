import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  addTimeSheetForm: FormGroup;
  phases:string[]=['Requirement Phase', 'design'];
  activities:string[]=['development requirements', 'prep'];
  projects: FormArray = new FormArray([new FormGroup({
    name: new FormControl('', [Validators.required]),
    phase: new FormControl('', [Validators.required]),
    activity: new FormControl('', [Validators.required]), 
    task:new FormControl('', [Validators.required]),
    billable:new FormControl(true, [Validators.required]),
    hours:new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[1-9]$/)])
  })]);
  constructor() { }

  ngOnInit() {
    this.addTimeSheetForm = new FormGroup({
      projects: this.projects
    })
  }

  getControls() {
    return (<FormArray>this.addTimeSheetForm.get('projects')).controls;
  }

  onDeleteIngredient(i) {
    (<FormArray>this.addTimeSheetForm.get('projects')).removeAt(i);
  }
  onAddRecord() {
    (<FormArray>this.addTimeSheetForm.get('projects')).push(new FormGroup({
      name: new FormControl('', [Validators.required]),
      phase: new FormControl('', [Validators.required]),
      activity: new FormControl('', [Validators.required]),
      task:new FormControl('', [Validators.required]),
      billable:new FormControl(true, [Validators.required]),
      hours:new FormControl('', [Validators.required])
    }));
  }

  onSubmit() {
    console.log(this.addTimeSheetForm.value);
  }

  onPhaseChange(phase:string, index:number){
    console.log(phase + index);
  }
}
