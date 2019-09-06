import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VenuesConfigurationService } from '../../services/configuration/venues-configuration.service';

@Component({
  selector: 'nbv-venues-configuration',
  templateUrl: './venues-configuration.component.html',
  styleUrls: ['./venues-configuration.component.scss']
})
export class VenuesConfigurationComponent implements OnInit {
  interestRadius$: Observable<number>;

  constructor(private venuesConfigurationService: VenuesConfigurationService) { }

  ngOnInit() {
    this.interestRadius$ = this.venuesConfigurationService.configuration$
        .pipe(map(configuration => configuration.radius));
  }

  changeInterestRadius(radius: number): void {
    const configuration = this.venuesConfigurationService.getConfiguration();
    this.venuesConfigurationService.setConfiguration({ ...configuration, radius });
  }
}
