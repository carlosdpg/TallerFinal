import { Component, OnInit } from '@angular/core';

import { CiudadService } from "../../services/ciudad.service";
import { NgForm } from "@angular/forms";
import { Ciudad } from "../../models/ciudad";

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css'],
  providers: [CiudadService]
})
export class CiudadComponent implements OnInit {

  constructor(public CiudadService: CiudadService) {}

  ngOnInit() {
    this.getCiudades();
  }

  addCiudad(form?: NgForm) {
    if (form.value._id) {
      this.CiudadService.putCiudad(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getCiudades();
      });
    } else {
      this.CiudadService.postCiudad(form.value).subscribe((res) => {
        this.getCiudades();
        this.resetForm(form);
      });
    }
  }

  getCiudades() {
    this.CiudadService.getCiudades().subscribe((res) => {
      this.CiudadService.ciudades = res;
    });
  }

  editCiudad(ciudad: Ciudad) {
    this.CiudadService.selectedCiudad = ciudad;
  }

  deleteCiudad(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.CiudadService.deleteCiudad(_id).subscribe((res) => {
        this.getCiudades();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.CiudadService.selectedCiudad = new Ciudad();
    }
  }
}