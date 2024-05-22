import { Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { AboutmeComponent } from './content/aboutme/aboutme.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'content/home',
    pathMatch: 'full',
  },
  {
    path: 'content',
    component: ContentComponent,
  },
  {
    path: 'content/home',
    component: HomeComponent,
  },
  {
    path: 'content/aboutme',
    component: AboutmeComponent,
  },
  {
    path: 'content/projects',
    component: ProjectsComponent,
  },
];
