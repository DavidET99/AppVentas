import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  eventos = [
    { nombre: 'Concierto de Rock', precio: 50 },
    { nombre: 'Partido de Fútbol', precio: 30 },
    { nombre: 'Película de Cine', precio: 10 },
    { nombre: 'Evento Deportivo', precio: 25 },
  ];

  constructor(private dataService: DatosService, private router: Router) {}

  irAFormularioCliente(evento: any) {
    this.dataService.setEvento(evento);
    this.router.navigate(['/formcli']);}
}
