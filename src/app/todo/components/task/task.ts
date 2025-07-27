import { Component, input, signal } from '@angular/core';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-task',
  imports: [ButtonComponent],
  templateUrl: './task.html'
})
export class TaskComponent {
  public text = input.required<string>();
  public checkboxId = signal<string>('');

  private static counter = signal<number>(0);
  constructor() {
    TaskComponent.counter.update((v) => ++v);
    this.checkboxId.set(`checkbox-${TaskComponent.counter()}`);
    console.log(this.checkboxId());
  }
}
