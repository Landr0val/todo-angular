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
  public emptyError = signal<boolean>(false);

  private static counter = signal(0);

  addTask(inputRef: any) {
    MainPage.counter.update((v) => ++v)
    this.emptyError.set(false);
    if (!inputRef.value()) {
      this.emptyError.set(true);
      return;
    }
    const newTask: Task = {
      id: MainPage.counter(),
      text: inputRef.value(),
      isActive: false
    }
    this.tasks.update(currentTasks => [...currentTasks, newTask])
    inputRef.value.set('');
  }

  deleteTask(taskId: number) {
    this.tasks.update((currentTasks) => currentTasks.filter((task) => task.id != taskId));
  }

  onTaskNameChange(value: string) {
    this.taskName.set(value);
  }
}
