import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VenuesConfiguration } from '../../models/venues-configuration.model';

@Injectable({
  providedIn: 'root'
})
export class VenuesConfigurationService {
  configuration$: BehaviorSubject<VenuesConfiguration> = new BehaviorSubject({ radius: 250 });

  constructor() { }

  setConfiguration(configuration: VenuesConfiguration): void {
    this.configuration$.next(configuration);
  }

  getConfiguration(): VenuesConfiguration {
    return this.configuration$.value;
  }
}
