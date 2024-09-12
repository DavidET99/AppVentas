import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../servicios/datos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formcli',
  templateUrl: './formcli.page.html',
  styleUrls: ['./formcli.page.scss'],
})
  export class FormCliPage {
    cliente = {
      nombre: '',
      apellido: '',
      edad: null
    };

    evento: any;

    constructor(private dataService: DatosService, private router: Router, private alertController: AlertController) {
      this.evento = this.dataService.getEvento();
      if (!this.evento) {
        console.error("No se encontró el evento en el servicio.");
        this.evento = { nombre: 'Evento desconocido', precio: 0 };
      }
    }
    enviarDatos() {
      this.router.navigate(['/compra'], {
        state: {
          cliente: this.cliente,
          evento: this.evento
        }
      });
    }

    regresar() {
      this.router.navigate(['/home']);
    }
  }


