import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      num: fb.control(null),
      date: fb.control(null),
      theme: fb.control(null),
      homework: fb.control(null),
      note: fb.control(null),
    });
  }

  // add() {
  //   (this.form.get('phones') as FormArray).push(this.fb.control(null));
  // }

  ngOnInit(): void {}
}