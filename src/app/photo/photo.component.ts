import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent {
  photoUrl:string='https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/RyanGosling10-19.JPG/236px-RyanGosling10-19.JPG'
}
