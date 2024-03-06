import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RouterLink } from '@angular/router';
import { Tooltip, initTWE } from 'tw-elements';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    BodyComponent,
    RouterOutlet,
    RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ngOnInit(): void {
    initTWE({ Tooltip });
  }
}
