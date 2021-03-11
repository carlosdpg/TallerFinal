import { Component, OnInit } from '@angular/core';

import { PersonaService } from "../../services/persona.service";
import { NgForm } from "@angular/forms";
import { Persona } from "../../models/persona";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [PersonaService]
})
export class PersonaComponent implements OnInit {

  constructor(public PersonaService: PersonaService) {}

  ngOnInit() {
    this.getPersonas();
  }

  addPersona(form?: NgForm) {
    if (form.value._id) {
      this.PersonaService.putPersona(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getPersonas();
      });
    } else {
      this.PersonaService.postPersona(form.value).subscribe((res) => {
        this.getPersonas();
        this.resetForm(form);
      });
    }
  }

  getPersonas() {
    this.PersonaService.getPersonas().subscribe((res) => {
      this.PersonaService.personas = res;
    });
  }

  editPersona(persona: Persona) {
    this.PersonaService.selectedPersona = persona;
  }

  deletePersona(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.PersonaService.deletePersona(_id).subscribe((res) => {
        this.getPersonas();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.PersonaService.selectedPersona = new Persona();
    }
  }
}