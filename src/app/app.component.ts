import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  url = ['https://angular.io/tutorial'];
  title = 'Cabecera';

  textoSaludar = 'Este botón está habilitado';
  textoActivar = 'Activar botón de saludo';
  textoDesactivar = 'Este botón está desactivado';

  btnAzulDesactivado = true;
  btnVerdeDesactivado = false;
  btnRojoDesactivado = true;

  mostrarAviso(){
    alert('Has pulsado el boton');
  }

  activarSaludo (){
    this.textoActivar = "Este botón está habilitado";
    this.btnVerdeDesactivado = true;

    this.textoDesactivar="Desactivar botón saludo";
    this.btnRojoDesactivado= false;

  }

  desactivarSaludo (){

    this.textoDesactivar="Este botón está deshabilitado";
    this.btnRojoDesactivado = true;

    this.textoActivar = "Este botón esta habilitado";
    this.btnVerdeDesactivado = false;

    this.textoSaludar = "Este botón está deshabilitado";
    this.btnAzulDesactivado = false;


  }
}
