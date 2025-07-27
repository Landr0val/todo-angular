import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InputComponent } from './todo/components/input/input';
import { ButtonComponent } from './todo/components/button/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ButtonComponent],
  templateUrl: './app.html'
})
export class App {
  protected title = 'tailwind-test';
}
