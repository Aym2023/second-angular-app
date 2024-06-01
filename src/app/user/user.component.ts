import { Component, Input , Output, EventEmitter} from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from '../tasks/tasks.component';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
//  };

interface User {
  id: string;
  avatar: string;
  name: string;
 };
 
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
   @Input({required: true}) users!: User;
  @Output() select = new EventEmitter();

    get imagePath() {
     return 'assets/users/'  + this.users.avatar;
    }

    OnSelectUser() {
      this.select.emit(this.users.id);
    }
}
