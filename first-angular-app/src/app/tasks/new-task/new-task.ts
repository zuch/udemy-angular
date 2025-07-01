import {Component, input, output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NewTaskModel} from './new-task.model';
import {inject} from "@angular/core";
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {

  userId = input.required<string>();
  closed = output<void>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  private tasksService = inject(TasksService);

  onCancel() {
    this.closed.emit()
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate()
      },
      this.userId()
    )
    this.closed.emit()
  }
}
