import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExperienceComponent } from "./experience/experience.component";
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, ExperienceComponent, AboutComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
