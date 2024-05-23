import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'content',
    component: ContentComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'aboutme',
    component: AboutmeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
];
