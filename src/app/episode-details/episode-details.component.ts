import { Component } from '@angular/core';
import { Episode } from '../utils/episode.model';
import { TvmazeApiService } from '../data-access/services/tvmaze-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episode-details',
  standalone: true,
  imports: [],
  templateUrl: './episode-details.component.html',
  styleUrl: './episode-details.component.scss'
})
export class EpisodeDetailsComponent {
  episode!: Episode;
  episodeId!: number;
  showId!: number;
  seasonId!: number;

  constructor(private tvmazeService: TvmazeApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.showId = +params.get('id')!;
      this.seasonId = +params.get('seasonId')!;
      this.showId = +params.get('showId')!;

      if (this.showId && this.episodeId && this.seasonId) {
        this.tvmazeService.getEpisodeByShowIdAndEpisodeNumberAndSeasonId(this.showId, this.episodeId, this.seasonId).subscribe((data: Episode) => {
          this.episode = data;
          console.log(this.episode);
        });
      }
    });
  }
}
