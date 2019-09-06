import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VenuesService } from '../../services/venues/venues.service';
import { Venue } from '../../models/venue.model';

@Component({
  selector: 'nbv-venues-list',
  templateUrl: './venues-list.component.html',
  styleUrls: ['./venues-list.component.scss']
})
export class VenuesListComponent implements OnInit {
  venues$: Observable<Venue[]>;
  isFetching$: Observable<boolean>;

  constructor(private venuesService: VenuesService) { }

  ngOnInit() {
    this.venues$ = this.venuesService.venues$;
    this.isFetching$ = this.venuesService.isFetching$;
  }
}
