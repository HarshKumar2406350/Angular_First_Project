import { Component, Input } from '@angular/core';
import { headerComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [headerComponent,UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  @Input({required:true}) selectedUser : {id : string, name: string, avatar: string} = this.users[0];
  //NOTE : selectedUser is marked as @Input({required:true}) but AppComponent is the root component, so parent component has to  pass this value to it. This means selectedUser must have some value .

  onSelectedUser(id: string) {
    this.selectedUser = this.users.find(user => user.id === id)!;
    
  }
}
