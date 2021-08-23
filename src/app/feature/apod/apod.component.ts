import { Component, OnInit, Output } from '@angular/core';
import { Apod } from '../apod';
import { ApodService } from '../apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {
  title = "Astronomy Picture of the Day";
  apod?: Apod;

  constructor(private apodService: ApodService) { }

  ngOnInit(): void {
    this.getApod();
  }

  getApod(): void {
    this.apodService.getApod().subscribe(apod => this.apod = apod);
  }
}
