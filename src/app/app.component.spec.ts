import { of } from 'rxjs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should setup current location on init', () => {
    // Given
    const userService = jasmine.createSpyObj(['setupCurrentLocation$']);
    userService.setupCurrentLocation$ = jasmine.createSpy().and.returnValue(of(null));
    const component = new AppComponent(userService);
    // When
    component.ngOnInit();
    // Then
    expect(userService.setupCurrentLocation$).toHaveBeenCalled();
  });
});
