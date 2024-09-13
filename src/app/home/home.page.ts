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
    { nombre: 'Concierto: Lil Uzi Vert', precio: 85000 },
    { nombre: 'Colo-Colo vs U. de Chile', precio: 15000 },
    { nombre: 'Deadpool & Wolverine', precio: 5000 },
    { nombre: 'Creamfields', precio: 125000 },
  ];

  constructor(private dataService: DatosService, private router: Router) {}

  irAFormularioCliente(evento: any, event: any) {
    const item = event.target.closest('ion-item');
    item.classList.add('active');
    setTimeout(() => {
      this.dataService.setEvento(evento);
      this.router.navigate(['/formcli']);
    }, 600);
}
}
