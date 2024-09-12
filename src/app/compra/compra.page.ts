import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage {
  cliente: any;
  evento: any;
  total!: number;
  descuento!: number;
  isSuccess: boolean | undefined;

  constructor(private router: Router, private toastController: ToastController) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.cliente = navigation.extras.state['cliente'];
      this.evento = navigation.extras.state['evento'];
      if (this.evento) {
        this.calcularTotal();
      } else {
        console.error('Evento no definido');
      }
    } else {
      console.error('No se pasaron datos en la navegación');
    }
  }

  calcularTotal() {

    this.descuento = 0;

    if (this.cliente.edad < 18) {
      this.descuento = 0.1;
    } else if (this.cliente.edad > 60) {
      this.descuento = 0.2;
    }

    const precioConDescuento = this.evento.precio - (this.evento.precio * this.descuento);
    this.total = precioConDescuento;
  }

  async finalizarCompra() {
    this.isSuccess = true;

    const toast = await this.toastController.create({
      message: 'Compra realizada',
      color: 'success',
      duration: 2000,
      position: 'middle',
      cssClass: 'success-toast'
    });
    await toast.present();

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2000);
  }

  regresar() {
    this.router.navigate(['/formcli']);
  }
}
