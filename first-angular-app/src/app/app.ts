import {Component} from '@angular/core';
import {HeaderComponent} from './header/header';
import {UserComponent} from './user/user';
import {TasksComponent} from './tasks/tasks';
import {DUMMY_USERS} from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [HeaderComponent, UserComponent, TasksComponent]
})
export class App {
  protected title = 'first-angular-app';

  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    console.log('selected user id: ' + id);
    this.selectedUserId = id;
  }
}
