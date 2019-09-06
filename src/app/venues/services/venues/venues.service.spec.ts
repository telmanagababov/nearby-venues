import { of, BehaviorSubject } from 'rxjs';
import { VenuesService } from './venues.service';
import { VenuesApiService } from '../../api/venues-api.service';
import { VenuesConfigurationService } from '../configuration/venues-configuration.service';


describe('VenuesService', () => {
  let service: VenuesService;
  let venuesApiService: VenuesApiService;
  let venuesConfigurationService: VenuesConfigurationService;

  beforeEach(initMocks);

  it('should fetch recommendations on configuration change', () => {
    // Given
    const nearbyVenues = [{
      id: 'id',
      name: 'name',
      address: 'address',
      distance: '0',
      category: '-',
      categoryIcon: '-'
    }];
    venuesApiService.getVenueRecommendations$ = jasmine.createSpy().and.returnValue(of(nearbyVenues));
    // When
    venuesConfigurationService.configuration$.next({ radius: 500 });
    // Then
    expect(service.getVenues()).toEqual(nearbyVenues);
  });

  it('should fetch recommendations on "fetchVenueRecommendations$"', () => {
    // Given
    const nearbyVenues = [{
      id: 'id',
      name: 'name',
      address: 'address',
      distance: '0',
      category: '-',
      categoryIcon: '-'
    }];
    venuesApiService.getVenueRecommendations$ = jasmine.createSpy().and.returnValue(of(nearbyVenues));
    // When
    service.fetchVenueRecommendations$();
    // Then
    expect(service.getVenues()).toEqual(nearbyVenues);
  });

  function initMocks() {
    venuesConfigurationService = jasmine.createSpyObj(['getConfiguration']);
    venuesConfigurationService.configuration$ = new BehaviorSubject(null);
    venuesApiService = jasmine.createSpyObj(['getVenueRecommendations$']);
    venuesApiService.getVenueRecommendations$ = jasmine.createSpy().and.returnValue(of(null));
    service = new VenuesService(venuesApiService, venuesConfigurationService);
  }
});
