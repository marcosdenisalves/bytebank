import { Transferencia } from './models/transferencia.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaDeTransferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private HttpClient: HttpClient) {
    this.listaDeTransferencias = [];
  }

  get transferencias() {
    return this.listaDeTransferencias;
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    return this.HttpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }

  todas(): Observable<Transferencia[]>{
    return this.HttpClient.get<Transferencia[]>(this.url);
  }
}
