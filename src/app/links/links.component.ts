import { Component } from '@angular/core';
import { link } from 'node:fs';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {
 twiiterLink:string='https://twitter.com/RyanGosling'
 instagramLink:string='https://www.instagram.com/rryan_ggosling/?ref=instagramabak.com&hl=uk'
 facebookLink:string='https://www.facebook.com/wotonaga'
}
