import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserLocation } from '../../models/user-location.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  location: UserLocation;

  constructor() { }

  setupCurrentLocation$(): Observable<void> {
    const location$ = new Subject<void>();

    navigator.geolocation.getCurrentPosition(
      (position: Position) => {
        this.location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        location$.next();
      },
      (error: PositionError) => location$.error(error)
    );

    return location$;
  }
}
