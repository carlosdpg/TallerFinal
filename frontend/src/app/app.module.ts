import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonaComponent } from './components/persona/persona.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { TipoDocumentoComponent } from './components/tipodocumento/tipodocumento.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    CiudadComponent,
    TipoDocumentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
