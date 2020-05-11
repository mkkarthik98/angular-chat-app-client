import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {

  username;
  room;

  constructor(private router:Router){

  }
  join(){
    this.router.navigate(
      ["app-chat"], 
    { queryParams: { username:this.username,room:this.room },  queryParamsHandling: "merge" });
  }

}
