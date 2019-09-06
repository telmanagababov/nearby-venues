import { VenuesConfigurationService } from '../../services/configuration/venues-configuration.service';
import { VenuesConfigurationComponent } from './venues-configuration.component';
import { BehaviorSubject } from 'rxjs';

describe('VenuesConfigurationComponent', () => {
  let component: VenuesConfigurationComponent;
  let venuesConfigurationService: VenuesConfigurationService;

  beforeEach(initMocks);

  it('should setup interestRadius$ on init', () => {
    // Given
    venuesConfigurationService.configuration$ = new BehaviorSubject({ radius: 300 });
    // When
    component.ngOnInit();
    // Then
    component.interestRadius$.subscribe(value => {
      expect(value).toEqual(300);
    });
  });

  it('should change configuration on "changeInterestRadius"', () => {
  // Given
    venuesConfigurationService.getConfiguration = jasmine.createSpy().and.returnValue({ });
    // When
    component.changeInterestRadius(500);
    // Then
    expect(venuesConfigurationService.setConfiguration).toHaveBeenCalledWith({ radius: 500 });
  });

  function initMocks() {
    venuesConfigurationService = jasmine.createSpyObj(['getConfiguration', 'setConfiguration']);
    component = new VenuesConfigurationComponent(venuesConfigurationService);
  }
});
