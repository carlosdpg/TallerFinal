import { Component } from '@angular/core';
import { Ciudad } from './models/ciudad';
import { Tipodocumento } from './models/tipodocumento';
import { Persona } from './models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  personaArray = Persona[] = [];
  ciudadArray = Ciudad[] = [];
  tipodocumentoArray = Tipodocumento[] = [];
  constructor() {
    this.personaArray = Persona[] = [];
    this.ciudadArray = Ciudad[] = [];       
    this.tipodocumentoArray = Tipodocumento[] = [];

  selectedPersona: Persona = new Persona();
  selectedCiudad: Ciudad = new Ciudad();
  selectedTipodocumento: Tipodocumento = new Tipodocumento();
  }
}

