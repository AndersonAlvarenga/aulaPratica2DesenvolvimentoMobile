import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
 
  @Input() locale;
  @Output() atualizaDado = new EventEmitter();
  constructor() { }
  
  atualizarDados(){
    let nome = "Villa Mix"
    let local={
      address:"Cruzeirão",
      city:"Belo Horizonte",
      country:"Brasil"
    };
    this.atualizaDado.emit({nome,local});
  }
  ngOnInit(): void {
    
  }

}
