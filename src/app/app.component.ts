import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user/user.service';

@Component({
  selector: 'nbv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLocationSet = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.setupCurrentLocation$().subscribe(() => {
      this.isLocationSet = true;
    });
  }
}
