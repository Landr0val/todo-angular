import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html'
})
export class InputComponent {
  type = input<string>('text');
  placeholder = input<string>('');
  value = signal<string>('');

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
  }
}
