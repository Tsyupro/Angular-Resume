import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  jobs: string = 'Розробка та впровадження аналітичних стратегій для оптимізації бізнес-процесів.';
}
