import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { JoinComponent } from './join/join.component';


const routes: Routes = [
  { path: 'app-chat', component: ChatComponent },
  { path: '', component:JoinComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
