import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() label: string | '' = '';
  @Input() accountType: 'chequing' | 'savings' | '' = ''

  @Output() clicked = new EventEmitter<void>()

  onClick() {
    this.clicked.emit();
  }
}
