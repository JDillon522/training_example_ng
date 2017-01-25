import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trickery',
  templateUrl: './trickery.component.html',
  styleUrls: ['./trickery.component.scss'],
  // interpolation: ['{[', ']}'] // Not working :(
})
export class TrickeryComponent implements OnInit {
  // public interpolationTest: 'I should work';
  public firstChildName: string = 'Primus!';
  public secondChildName: string = 'Secundus!';

  constructor() { }

  ngOnInit() {
  }


}
