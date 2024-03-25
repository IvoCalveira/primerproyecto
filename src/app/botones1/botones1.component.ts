import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//formsModule es para que funcione el [(ngmodel)]
@Component({
  selector: 'app-botones1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './botones1.component.html',
  styleUrl: './botones1.component.css'
})
export class Botones1Component {
  tipo: string="texto";
CambiarTipo():void {

  if (this.tipo=="text"){
    this.tipo="text";
    return;
  }
  if (this.tipo=="range"){
    this.tipo="range";
    return;
  }
  if (this.tipo=="number"){
    this.tipo="number";
    return;
  }

}


}
