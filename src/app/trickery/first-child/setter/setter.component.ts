import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-setter',
  templateUrl: './setter.component.html',
  styleUrls: ['./setter.component.scss']
})
export class SetterComponent implements OnInit {
  private _setterName: string;

  constructor() { }

  ngOnInit() {
  }

  @Input() set setterName(name:string) {
    this._setterName = name;
  }

  get setterName(): string {
    return this._setterName;
  }

}
