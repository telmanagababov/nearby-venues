import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ClientService } from '../../shared/services/client/client.service';
import { UserService } from '../../shared/services/user/user.service';
import { VenuesApiService } from './venues-api.service';

describe('VenuesApiService', () => {
  let service: VenuesApiService;
  let httpClient: HttpClient;
  let clientService: ClientService;
  let userService: UserService;

  beforeEach(initMocks);

  it('should get venues on "getVenueRecommendations$"', () => {
    // Given
    userService.location = { latitude: 10.1, longitude: 30.05 };
    httpClient.get = jasmine.createSpy().and.returnValue(of({
      response: {
        groups: [{
          items: [{
            venue: {
              id: 'id',
              name: 'name',
              location: { address: 'address', distance: '100' },
              categories: [{ name: 'category', icon: { prefix: 'prefix', suffix: 'suffix' }}]
            }
          }]
        }]
      }
    }));
    // When
    service.getVenueRecommendations$({ radius: 0 }).subscribe(venues => {
      expect(venues).toEqual([{
        id: 'id',
        name: 'name',
        address: 'address',
        distance: '100',
        category: 'category',
        categoryIcon: 'prefix32suffix'
      }]);
    });
  });

  function initMocks() {
    httpClient = jasmine.createSpyObj(['get']);
    clientService = jasmine.createSpyObj(['toString']);
    userService = jasmine.createSpyObj(['setupCurrentLocation$']);
    service = new VenuesApiService(httpClient, clientService, userService);
  }
});
