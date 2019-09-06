import { VenuesConfigurationService } from './venues-configuration.service';

describe('VenuesConfigurationService', () => {
  it('should update configuration on "setConfiguration"', () => {
    // Given
    const service = new VenuesConfigurationService();
    // When
    service.setConfiguration({ radius: 1000 });
    // Then
    expect(service.getConfiguration()).toEqual({ radius: 1000 });
  });
});
