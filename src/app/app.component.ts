import { Component } from '@angular/core';

import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[HeaderComponent,  UserComponent],
})
export class AppComponent {}
