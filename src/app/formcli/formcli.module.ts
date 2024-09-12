import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormcliPageRoutingModule } from './formcli-routing.module';

import { FormCliPage } from './formcli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormcliPageRoutingModule
  ],
  declarations: [FormCliPage]
})
export class FormcliPageModule {}
