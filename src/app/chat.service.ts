import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

export class chatService{
    public join(username: any, room: any) {
      this.socket.emit('join',username,room,(error)=>{
        if(error){
            alert(error)
            location.href='/'
        }
    });
    }
    socket: any;
    
    constructor(){
        let url="https://angular-chat-app.herokuapp.com/";
        this.socket =io(url);
        
    };
    public getRoomData=()=>{
        return Observable.create((observer) => {
            this.socket.on('roomData',({room,users})=>{
                observer.next({room,users});
            })
        });
    }
    public sendMessage(message,username,room) {
        this.socket.emit('sendMessage', message,username,room,(error) => {
            
            if (error) {
                return console.log(error)
            }
    
            console.log('Message delivered!')
        })
    }

    public getMessages = () => {
        return Observable.create((observer) => {
            this.socket.on('message', (message) => {
                console.log(message)
                observer.next(message);
            })
        });
    }
}