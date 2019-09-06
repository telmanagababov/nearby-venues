import { Injectable,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VenuesConfiguration } from '../models/venues-configuration.model';
import { Venue } from '../models/venue.model';
import { VenuesApiRequests } from './venues-api.requests';
import { ClientService } from '../../shared/services/client/client.service';
import { UserService } from '../../shared/services/user/user.service';
import { API } from './venues-api.model';

@Injectable({
  providedIn: 'root'
})
export class VenuesApiService {
  private readonly apiVersion = '20180323';

  constructor(
    private httpClient: HttpClient,
    private clientService: ClientService,
    private userService: UserService
  ) { }

  getVenueRecommendations$(configuration: VenuesConfiguration): Observable<Venue[]> {
    const { clientId, clientSecret } = this.clientService;
    const { latitude, longitude } = this.userService.location;
    const { radius } = configuration;
    const params = {
      client_id: clientId,
      client_secret: clientSecret,
      ll: `${latitude},${longitude}`,
      radius: radius.toString(),
      v: this.apiVersion
    };

    return this.httpClient
        .get<API.Venues>(VenuesApiRequests.GetRecommendations, { params })
        .pipe(map(response => this.recommendationsResponseToVenues(response)));
  }

  private recommendationsResponseToVenues(recommendationsResponse): Venue[] {
    return recommendationsResponse.response.groups[0].items.map(item => {
      const { id, name } = item.venue;
      const { address, distance } = item.venue.location;
      const category = item.venue.categories[0];

      return {
        id,
        name,
        address,
        distance,
        category: category.name,
        categoryIcon: `${category.icon.prefix}32${category.icon.suffix}`
      };
    });
  }
}
