import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalOutQtyComponent } from './components/modal-out-qty/modal-out-qty.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  exports: [ModalOutQtyComponent],
  declarations: [ModalOutQtyComponent],
})
export class SharedModule {}
