import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent implements OnInit {
  @Input() name: string;
  @Input() childName: string;

  constructor() { }

  ngOnInit() {
  }

}
