import {Component, inject, input} from '@angular/core';
import {Task} from './task/task';
import {NewTask} from './new-task/new-task';
import {TasksService} from "./tasks.service"

@Component({
  selector: 'app-tasks',
  imports: [
    Task, NewTask
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class TasksComponent {

  userId = input.required<string>();
  name = input.required<string>();
  isAddingTask = false;

  private tasksService = inject(TasksService);

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId())
  }

  onStartAddTask = () => {
    this.isAddingTask = true
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
