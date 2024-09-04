import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  searchText: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToHomePage(): void {
    this.router.navigate(['/']);
  }

}
