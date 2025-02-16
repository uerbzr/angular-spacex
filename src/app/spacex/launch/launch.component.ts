import { Injectable, OnInit } from '@angular/core';

import { Component } from '@angular/core';
import { LaunchesService } from '../launches.service';
import { Observable } from 'rxjs';
import { Launch } from '../../model/launch';

@Component({
  selector: 'app-launch',
  standalone: false,
  templateUrl: './launch.component.html',
  styleUrl: './launch.component.css',
})
export class LaunchComponent {
  launches$ = new Observable<Launch[]>();

  constructor(private readonly launchesService: LaunchesService) {}

  // lifecycle hook similar to a useEffect in React

  ngOnInit(): void {
    this.launches$ = this.launchesService.getLaunches();
    this.launches$.subscribe((launch) => {
      launch.forEach((launch) => {
        console.log(launch.mission_name);
      });
    });
  }
}
