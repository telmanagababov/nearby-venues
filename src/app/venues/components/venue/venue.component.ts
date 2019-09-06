import { Component, Input } from '@angular/core';
import { Venue } from '../../models/venue.model';

@Component({
  selector: 'nbv-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent {
  @Input() venue: Venue;
}
