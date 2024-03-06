import { Component } from '@angular/core';
import { Carousel, initTWE } from 'tw-elements';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  ngOnInit(): void {
    initTWE({ Carousel, Tooltip: false });
  }
}
