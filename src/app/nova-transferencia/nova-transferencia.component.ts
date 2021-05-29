import { routes } from './../app-routing.module';
import { Component, EventEmitter, Output } from "@angular/core";
import { TransferenciaService } from "../services/transferencia.service";
import { Transferencia } from './../services/models/transferencia.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nova-transferecia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir() {
    console.log('Solicitado nova transferencia');

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.log(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
