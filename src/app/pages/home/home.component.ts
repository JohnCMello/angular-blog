import { Component } from '@angular/core';
import { HeroBannerComponent } from '@components/hero-banner/hero-banner.component';
import { PostListComponent } from '@components/post-list/post-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostListComponent, HeroBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomePageComponent {}
