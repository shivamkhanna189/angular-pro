import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(event){
    console.log(event);
  }

  
  checked(event){
    console.log(event ? " Checkbox is checked" : "Checkbox is Unchecked");
  }

}
