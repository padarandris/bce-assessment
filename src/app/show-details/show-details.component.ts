import { Component, Input } from '@angular/core';
import { Show } from '../utils/show.model';
import { TvmazeApiService } from '../data-access/services/tvmaze-api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Episode } from '../utils/episode.model';
import { EpisodeCardComponent } from "../components/episode-card/episode-card.component";
import { Actor } from '../utils/actor.model';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [CommonModule, EpisodeCardComponent],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.scss'
})
export class ShowDetailsComponent {
  show!: Show;
  showId!: number;

  episodes: Episode[] = [];
  cast: Actor[] = [];

  constructor(private tvmazeService: TvmazeApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.showId = +params.get('id')!;

      if (this.showId) {
        this.getShowDetailsById(this.showId);
        this.getEpisodesByShowId(this.showId);
        this.getCastByShowId(this.showId);
      }
    });
  }

  getShowDetailsById(id: number): void {
    this.tvmazeService.getShowById(id).subscribe((data: Show) => {
      this.show = data;
      console.log(this.show);
    });
  }

  getEpisodesByShowId(id: number): void {
    this.tvmazeService.getEpisodesByShowId(id).subscribe((data: any) => {
      this.episodes = data;
    });
  }

  getCastByShowId(id: number): void {
    this.tvmazeService.getCastByShowId(id).subscribe((data: any) => {
      this.cast = data;
      console.log(this.cast);
    });
  }

}
