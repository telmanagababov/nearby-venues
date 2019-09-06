import { BehaviorSubject } from 'rxjs';
import { VenuesService } from '../../services/venues/venues.service';
import { VenuesListComponent } from './venues-list.component';

describe('VenuesListComponent', () => {
  let component: VenuesListComponent;
  let venuesService: VenuesService;

  beforeEach(initMocks);

  it('should setup venues$ on init', () => {
    // Given
    const venues$ = new BehaviorSubject(null);
    venuesService.venues$ = venues$;
    // When
    component.ngOnInit();
    // Then
    expect(component.venues$).toBe(venues$);
  });

  it('should setup isFetching$ on init', () => {
    // Given
    const isFetching$ = new BehaviorSubject(null);
    venuesService.isFetching$ = isFetching$;
    // When
    component.ngOnInit();
    // Then
    expect(component.isFetching$).toBe(isFetching$);
  });

  function initMocks() {
    venuesService = jasmine.createSpyObj(['fetchVenueRecommendations$']);
    component = new VenuesListComponent(venuesService);
  }
});
