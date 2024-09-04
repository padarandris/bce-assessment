import { Component, Input } from '@angular/core';
import { Show } from '../../utils/show.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.scss'
})
export class ShowCardComponent {

  @Input() show!: Show;

  constructor(private router: Router) {}

  navigateToShowDetailsPage(showId: number): void {
    this.router.navigate(['/show', showId]);
  }

}
