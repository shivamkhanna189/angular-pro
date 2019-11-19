import { Component, OnInit, Output, EventEmitter, ContentChild, Input } from '@angular/core';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent implements OnInit {

  @Output()  submitted : EventEmitter<any> = new EventEmitter();

 
  constructor() { }

  ngOnInit() {
  }
  public showMessage : boolean ; 
  
  @ContentChild(AuthRememberComponent,{static : false}) remember : AuthRememberComponent ;
  ngAfterContentInit(){
      if(this.remember){
        this.remember.check.subscribe(data=>{
            this.showMessage = data ; 
        })
      }
      
  }
  submit(){
    this.submitted.emit({
      usernmae : "Shivam",
      age : 23 
    });
  }






}
