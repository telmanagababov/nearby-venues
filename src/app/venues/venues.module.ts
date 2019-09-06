import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenuesLayoutComponent } from './layouts/venues-layout.component';
import { VenuesListComponent } from './components/venues-list/venues-list.component';
import { VenueComponent } from './components/venue/venue.component';
import { VenuesConfigurationComponent } from './components/venues-configuration/venues-configuration.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VenuesLayoutComponent,
    VenuesListComponent,
    VenueComponent,
    VenuesConfigurationComponent
  ],
  exports: [
    VenuesLayoutComponent
  ]
})
export class VenuesModule { }
