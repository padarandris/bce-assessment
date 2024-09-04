import { Component } from '@angular/core';
import { TvmazeApiService } from '../data-access/services/tvmaze-api.service';
import { Show } from '../utils/show.model';
import { ShowCardComponent } from '../components/show-card/show-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ShowCardComponent, CommonModule, FormsModule ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  searchText: string = '';
  shows: Show[] = [];

  constructor(private tvmazeService: TvmazeApiService) { }

  ngOnInit(): void {
    this.searchShows('Breaking Bad');
  }

  searchShows(query: string): void {
    this.tvmazeService.searchShows(query).subscribe((data: any[]) => {
      this.shows = data.map(item => item.show);
      console.log(this.shows);
    });
  }

}
