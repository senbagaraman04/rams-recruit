import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mapinterview',
  templateUrl: './mapinterview.component.html',
  styleUrls: ['./mapinterview.component.scss']
})
export class MapinterviewComponent implements OnInit {
  mapInterViewForm: FormGroup = {} as FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // this.mapInterViewForm = new FormGroup({
    //   name: ['', Validators.required]
    // })
  }

}
