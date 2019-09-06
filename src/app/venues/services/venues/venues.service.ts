import { Injectable,  } from '@angular/core';
import { BehaviorSubject, Subscription, throwError } from 'rxjs';
import { Venue } from '../../models/venue.model';
import { VenuesApiService } from '../../api/venues-api.service';
import { VenuesConfigurationService } from '../configuration/venues-configuration.service';

@Injectable({
  providedIn: 'root'
})
export class VenuesService {
  venues$: BehaviorSubject<Venue[]> = new BehaviorSubject([]);
  isFetching$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private venuesApiService: VenuesApiService,
    private venuesConfigurationService: VenuesConfigurationService
  ) {
    this.venuesConfigurationService.configuration$.subscribe(() => {
      this.fetchVenueRecommendations$();
    });
  }

  fetchVenueRecommendations$(): Subscription {
    const configuration = this.venuesConfigurationService.getConfiguration();
    this.isFetching$.next(true);

    return this.venuesApiService.getVenueRecommendations$(configuration).subscribe(venues => {
      this.venues$.next(venues);
      this.isFetching$.next(false);
    }, error => {
      this.venues$.next([]);
      this.isFetching$.next(false);
      throwError(error);
    });
  }

  getVenues(): Venue[] {
    return this.venues$.value;
  }

  getFetchingState(): boolean {
    return this.isFetching$.value;
  }
}
