import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  templateUrl: './auth-remember.component.html',
  styleUrls: ['./auth-remember.component.css']
})
export class AuthRememberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 
  @Output() check : EventEmitter<any> = new EventEmitter();

  checkBoxChecked(event){
    this.check.emit(event.currentTarget.checked);
  }

}
