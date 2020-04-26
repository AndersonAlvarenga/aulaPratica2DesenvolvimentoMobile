import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { getLocaleDayPeriods } from '@angular/common';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  
  evento = [{

     name: 'Villa Mix', date: '9/26/2020', time: '10am', location: { address: 'Mineirão ', city: 'Belo Horizonte', country: 'Brasil' } },
    { name: 'Rock In Rio', date: '4/15/2020', time: '9am', onlineUrl: 'https://www.rockinrio.com.br/' },
    { name: 'Campus Party', date: '6/10/2020', time: '8am' },
    { name: 'Loolapalooza', date: '4/15/2020', time: '9am', onlineUrl: 'http://www.loolapalooza.com' },
    { name: 'Samba Prime', date: '6/10/2020', time: '8am', location: { address: 'Expominas', city: 'Belo Horizonte', country: 'Brasil' }, onlineUrl: 'http://www.sambaprime.com.br' }

  ];
  



  constructor() { }
    receberEnderecoAtualizado(dados) {
      for (let evento1 of this.evento) {
        if (evento1.name === dados.name) {
        evento1.location=dados.location;
        console.log(evento1.location);
        }
      }
    }
  


  ngOnInit(): void {
  }

}
