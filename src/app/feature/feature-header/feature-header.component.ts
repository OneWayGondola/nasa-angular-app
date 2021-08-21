import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-header',
  templateUrl: './feature-header.component.html',
  styleUrls: ['./feature-header.component.css']
})
export class FeatureHeaderComponent implements OnInit {
  @Input() title?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
