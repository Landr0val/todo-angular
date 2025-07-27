import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html'
})
export class ButtonComponent {
  type = input<string>('button');
  text = input.required<string>()
}
