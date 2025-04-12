import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
  <button class="bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90" 
    (click)="btnCliked.emit()">
    {{ label() }}
  </button>
  `,
})
export class PrimaryButtonComponent {
  label = input('');

  btnCliked = output();
}
