import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { PostDetailPageComponent } from '@pages/post-detail/post-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'posts/:id',
    component: PostDetailPageComponent,
  },
];
