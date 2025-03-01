import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal( DUMMY_USERS[randomIndex])
  imagePath = computed(() => 'users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return 'users/' + this.selectedUser.avatar;
  // }

  onSelectedUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
