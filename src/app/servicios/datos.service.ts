import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  [x: string]: any;
  private evento: any;

  constructor() { }

  setEvento(evento: any) {
    this.evento = evento;
  }

  getEvento() {
    return this.evento;
  }
}
