import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../../utils/show.model';
import { Episode } from '../../utils/episode.model';

@Injectable({
  providedIn: 'root'
})
export class TvmazeApiService {

  private apiUrl = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  getHomePageShows(page: number = 1): Observable<Show[]> {
    const url = `${this.apiUrl}/shows?page=${page}`;
    return this.http.get<Show[]>(url);
  }

  searchShows(query: string): Observable<Show[]> {
    const url = `${this.apiUrl}/search/shows?q=${query}`;
    return this.http.get<Show[]>(url);
  }

  getShowById(id: number): Observable<Show> {
    const url = `${this.apiUrl}/shows/${id}`;
    return this.http.get<Show>(url);
  }

  getEpisodesByShowId(id: number): Observable<any[]> {
    const url = `${this.apiUrl}/shows/${id}/episodes`;
    return this.http.get<any[]>(url);
  }

  getEpisodeByShowIdAndEpisodeNumberAndSeasonId(showId: number, season: number, number: number): Observable<Episode> {
    const url = `${this.apiUrl}/shows/${showId}/episodebynumber?season=${season}&number=${number}`;
    return this.http.get<Episode>(url);
  }

  getSchedule(): Observable<any[]> {
    const url = `${this.apiUrl}/schedule`;
    return this.http.get<any[]>(url);
  }

}
