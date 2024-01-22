import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillOne: string = 'Високий рівень володіння мовами програмування, такими як Python, Java, JavaScript, C++, або іншими, залежно від специфіки проектів.';
  skillTwo: string = 'Робота з реляційними базами даних, такими як MySQL, PostgreSQL, або NoSQL базами, такими як MongoDB.';
  skillFree: string = 'Знання технологій веб-розробки, таких як HTML, CSS, і JavaScript, і бажання працювати з фреймворками, такими як React, Angular, або Vue.js.';

}
