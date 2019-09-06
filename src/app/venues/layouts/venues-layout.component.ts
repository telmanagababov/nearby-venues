import { Component, OnInit } from '@angular/core';
import { VenuesService } from '../services/venues/venues.service';

@Component({
  selector: 'nbv-venues-layout',
  templateUrl: './venues-layout.component.html',
  styleUrls: ['./venues-layout.component.scss']
})
export class VenuesLayoutComponent implements OnInit {

  constructor(private venuesService: VenuesService) { }

  ngOnInit() {
    this.venuesService.fetchVenueRecommendations$();
  }
}
