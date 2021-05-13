import { Component } from '@angular/core';

@Component({
  selector: 'ps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'personal-site';

  // links to socials, etc.
  resume: string = 'https://drive.google.com/file/d/13BTq44jxns_GqGaeAqMnJuoeuw2wMJXe/view?ths=true';
  email: string = 'mailto: lilyorgeron@college.harvard.edu';
  github: string = 'https://github.com/lilyorgeron';
  linkedIn: string = 'www.linkedin.com/in/lilyorgeron';
}
