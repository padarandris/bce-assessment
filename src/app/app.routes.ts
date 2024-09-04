import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
      },
      { path: 'show/:id',
        component: ShowDetailsComponent,
      },
      { path: 'show/:showId/season/:seasonId/episodes/:id',
        component: EpisodeDetailsComponent,
      },
];
