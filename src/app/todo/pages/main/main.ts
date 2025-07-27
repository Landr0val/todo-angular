import { Component, signal } from '@angular/core';
import { TaskComponent } from '../../components/task/task';
import { InputComponent } from '../../components/input/input';
import { ButtonComponent } from '../../components/button/button';
import { Task } from '../../interaces/task.interface';

@Component({
  selector: 'main-page',
  imports: [TaskComponent, InputComponent, ButtonComponent],
  templateUrl: './main.html'
})
export class MainPage {
  public tasks = signal<Task[]>([]);
  public taskName = signal<string>('');
  public taskIsActive = signal<boolean>(false);

  private static counter = signal(0);

  addTask(taskName: string) {
    MainPage.counter.update((v) => ++v)
    const newTask: Task = {
      id: MainPage.counter(),
      text: taskName,
      isActive: false
    }
    this.tasks.update(currentTasks => [...currentTasks, newTask])
  }

  deleteTask(taskId: number) {
    this.tasks.update((currentTasks) => currentTasks.filter((task) => task.id != taskId));
  }

  onTaskNameChange(value: string) {
    this.taskName.set(value);
  }
}
