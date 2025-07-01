import {Component, computed, input, output} from '@angular/core';
import {User} from './user.model';
import {Card} from '../shared/card/card'; // Assuming you have a User model defined

@Component({
  selector: 'app-user',
  imports: [
    Card
  ],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {

  user = input.required<User>();
  selected = input.required<boolean>();

  imagePath = computed(() => `${this.user().avatar}`);
  select = output<string>();

  onSelectUser() {
    this.select.emit(this.user().id)
  }
}
