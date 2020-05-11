import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { chatService } from './chat.service';
import { JoinComponent } from './join/join.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    JoinComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [chatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
