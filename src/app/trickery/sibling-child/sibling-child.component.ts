import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sibling-child',
  templateUrl: './sibling-child.component.html',
  styleUrls: ['./sibling-child.component.scss']
})
export class SiblingChildComponent implements OnInit {
  @Input() siblingName: string;
  @Output() siblingAge = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  submitNewAge(age: number) {
    this.siblingAge.emit(age);
  }

}
