import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
  @Input() localizacao;
  @Input() nome;
  @Output() atualizaEndereco = new EventEmitter();
  constructor() { }
  atualizar(local,cidade,pais){
this.atualizaEndereco.emit({name:this.nome,location:{address: local, city: cidade,country: pais}})
  }

  ngOnInit(): void {
    
  }

}
