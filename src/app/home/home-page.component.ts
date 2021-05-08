import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { xpInfo } from './experience';
import { ExperienceService } from './experience.service';
import { ProjectInfo } from './project';
import { ProjectService } from './project.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  public name: string = 'Lily Orgeron';
  portrait: string = 'https://i.ibb.co/tzwXq4h/depositphotos-244889634-stock-illustration-user-profile-picture-isolate-background.jpg';

  errorMessage: string = '';
  subProject!: Subscription;
  subXp!: Subscription;

  info: ProjectInfo[] = [];
  xp: xpInfo[] = [];

  constructor(private projectService: ProjectService,
              private xpService: ExperienceService) { }

  toggleImageTo(a: string): void {
    let temp = (<HTMLImageElement>document.getElementById(a));
    temp.src = this.info[Number(a)-1].gifUrl;
    console.log(temp.src);
    
  }

  toggleImageFrom(a: string): void {
    let temp = (<HTMLImageElement>document.getElementById(a));
    temp.src = this.info[Number(a)-1].picUrl;
    console.log(temp.src);
  }
  

  ngOnInit(): void {

    this.subProject = this.projectService.getInfo().subscribe({
      next: info => {
        this.info = info;
      },
      error: err => this.errorMessage = err
    });

    this.subXp = this.xpService.getXp().subscribe({
      next: xp => {
        this.xp = xp;
      },
      error: err => this.errorMessage = err
    });

  }

  ngOnDestroy(): void {
    this.subProject.unsubscribe();
    this.subXp.unsubscribe();
  }
  

}
