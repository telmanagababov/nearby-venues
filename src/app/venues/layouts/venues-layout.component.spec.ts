import { VenuesLayoutComponent } from './venues-layout.component';

describe('LayoutsComponent', () => {
  it('should fetch venues on init', () => {
    // Given
    const venuesService = jasmine.createSpyObj(['fetchVenueRecommendations$']);
    const component = new VenuesLayoutComponent(venuesService);
    // When
    component.ngOnInit();
    // Then
    expect(venuesService.fetchVenueRecommendations$).toHaveBeenCalled();
  });
});
