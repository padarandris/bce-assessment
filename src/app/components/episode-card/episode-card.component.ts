import { Component, Input } from '@angular/core';
import { Episode } from '../../utils/episode.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episode-card',
  standalone: true,
  imports: [],
  templateUrl: './episode-card.component.html',
  styleUrl: './episode-card.component.scss'
})
export class EpisodeCardComponent {

  @Input() episode!: Episode;
  @Input() showId!: number;

  constructor(private router: Router) {}


  navigateToEpisodeDetailsPage(showId: number, seasonId: number, episodeId: number): void {
    this.router.navigate([`/show/${showId}/season/${seasonId}/episodes/${episodeId}`]);
  }

}
