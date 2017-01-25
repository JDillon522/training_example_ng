import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent implements OnInit {
  @Input() name: string;
  
  constructor() { }

  ngOnInit() {
  }

}
