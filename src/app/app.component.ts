import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { LinksComponent } from './links/links.component';
import { PhotoComponent } from './photo/photo.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ExperienceComponent,LinksComponent,PhotoComponent,SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'resume-project';
  currentDate: Date = new Date();

}
