import { Component, Input , Output, EventEmitter} from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from '../tasks/tasks.component';
import { type User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
 
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  @Input({required: true}) users!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();

    get imagePath() {
     return 'assets/users/'  + this.users.avatar;
    }

    OnSelectUser() {
      this.select.emit(this.users.id);
    }
}
