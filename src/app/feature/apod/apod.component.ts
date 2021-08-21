import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {
  title = "Astronomy Picture of the Day";

  constructor() { }

  ngOnInit(): void {
  }

}
