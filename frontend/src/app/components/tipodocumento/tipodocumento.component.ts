import { Component, OnInit } from '@angular/core';

import { TipoDocumentoService } from "../../services/tipodocumento.service";
import { NgForm } from "@angular/forms";
import { TipoDocumento } from "../../models/tipodocumento";

@Component({
  selector: 'app-tipodocumento',
  templateUrl: './tipodocumento.component.html',
  styleUrls: ['./tipodocumento.component.css'],
  providers: [TipoDocumentoService]
})
export class TipoDocumentoComponent implements OnInit {

  constructor(public TipoDocumentoService: TipoDocumentoService) {}

  ngOnInit() {
    this.getTipoDocumentos();
  }

  addTipoDocumento(form?: NgForm) {
    if (form.value._id) {
      this.TipoDocumentoService.putTipoDocumento(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getTipoDocumentos();
      });
    } else {
      this.TipoDocumentoService.postTipoDocumento(form.value).subscribe((res) => {
        this.getTipoDocumentos();
        this.resetForm(form);
      });
    }
  }

  getTipoDocumentos() {
    this.TipoDocumentoService.getTipoDocumentos().subscribe((res) => {
      this.TipoDocumentoService.tipodocumentos = res;
    });
  }

  editTipoDocumento(tipodocumento: TipoDocumento) {
    this.TipoDocumentoService.selectedTipoDocumento = tipodocumento;
  }

  deleteTipoDocumento(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.TipoDocumentoService.deleteTipoDocumento(_id).subscribe((res) => {
        this.getTipoDocumentos();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.TipoDocumentoService.selectedTipoDocumento = new TipoDocumento();
    }
  }
}