import { Component, Output, EventEmitter, inject, Input} from '@angular/core';
import {type  NewTaskData } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!:string;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
   enteredTitle = '';
   enteredSummary = '';
   enteredDueDate = '';
   private tasksService = inject(TaskService);

  onCancel () {
    this.close.emit();
  }

  onSubmit() {
  this.tasksService.addTask(
    {
    title: this.enteredTitle ,
    summary: this.enteredSummary,
    date: this.enteredDueDate}, ''
  );
  }
}
