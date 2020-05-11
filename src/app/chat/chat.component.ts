import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { chatService } from '../chat.service';
import * as Mustache from 'mustache';
import * as moment from 'moment';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  //@ViewChild('message-template',{static: true}) messageTemplate: ElementRef;
  username: any;
  room: any;
  message: any;
  sidebarTemplate;
  
  constructor(private _Activatedroute:ActivatedRoute,private chatService:chatService) { 
    
    this._Activatedroute.queryParams.subscribe(params => { 
      console.log(params)
      this.username = params.username
      this.room = params.room
  });
  }

  ngOnInit() {
    this.chatService.getMessages().subscribe((message)=>{
      
     this.getMessage(message)
    })
    this.chatService.getRoomData().subscribe(({room,users})=>{
     
     this.getRoomData({room,users})
    })
    this.chatService.join(this.username,this.room);
  }
  sendMessage(){

    this.chatService.sendMessage(this.message,this.username,this.room)
    this.message='';
  }
getRoomData(roomDetails){
  //.log(room,users)
  const html = Mustache.render(`<h2 class="room-title">{{room}}</h2>
  <h4 class="list-title">Users</h4>
  <ul class="users">
     
          {{#users}}
          <li>{{username}}</li>
          {{/users}}
     
  </ul>`, {
    room: roomDetails.room,
    users: roomDetails.users
})
document.querySelector('#sidebar').innerHTML=html
}
getMessage(message){
    const html = Mustache.render(`<div class="message">
    <p>
        <span class="message__name">{{username}}</span>
        <span class="message__meta">{{createdAt}}</span>
    </p>
    <p>{{message}}</p>
</div>`, {
      message: message.text,
      createdAt: moment(message.createdAt).format('h:mm a'),
      username:message.user
  })
    document.querySelector('#messages').insertAdjacentHTML('beforeend', html)
 
}
}
