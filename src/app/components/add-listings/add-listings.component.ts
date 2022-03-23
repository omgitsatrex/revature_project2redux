import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-listings',
  templateUrl: './add-listings.component.html',
  styleUrls: ['./add-listings.component.css']
})
export class AddListingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
onFormSubmit(data: any){
  console.log(data)
}

}
