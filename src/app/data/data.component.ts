import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @Input() evento;

  constructor() { }

  ngOnInit(): void {
    console.log("teste");
   console.log(this.evento);
  }

}
