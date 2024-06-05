import { Component,   Input } from '@angular/core';
import { DUMMY_USERS } from '../user/dummy-users';
import {type NewTaskData} from './task/task.model';
import { TaskService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required:true}) userId!: string;
  @Input({required:true}) name!: string;
  isAddingTask = false;
  // private taskService = new TaskService();
 constructor(private tasksService : TaskService){
 }
 
  get selecedUsertask () {
  return this.tasksService.getUsertasks(this.userId);
}

onCompleteTask(id: string) {
   return  ;
}

onStartAddTAsk () {
this.isAddingTask = true;
}

onCancelAddTask () {
  this.isAddingTask = false;
}

onAddTask(newdata: NewTaskData) {
  return;

 this.isAddingTask = false;
}
}
