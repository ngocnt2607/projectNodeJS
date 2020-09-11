import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'mg-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
validatingForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      contactFormModalCourseName: new FormControl('', Validators.required),
      contactFormModalCourseDescription: new FormControl('', Validators.required),
      contactFormModalShop: new FormControl('', Validators.required)
    });
  }
  get contactFormModalCourseName() {
    return this.validatingForm.get('contactFormModalCourseName');
  }
  get contactFormModalCourseDescription() {
    return this.validatingForm.get('contactFormModalCourseDescription');
  }
  get contactFormModalShop() {
    return this.validatingForm.get('contactShop');
  }
}
