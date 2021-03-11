import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Ciudad } from "../models/ciudad";

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  selectedCiudad: Ciudad;
  ciudades: Ciudad[];
  readonly URL_API = "http://localhost:4000/api/ciudad";

  constructor(private http: HttpClient) {
    this.selectedCiudad = new Ciudad();
  }

  postCiudad(ciudad: Ciudad) {
    return this.http.post(this.URL_API, ciudad);
  }

  getCiudades() {
    return this.http.get<Ciudad[]>(this.URL_API);
  }

  putCiudad(ciudad: Ciudad) {
    return this.http.put(this.URL_API + `/${ciudad._id}`, ciudad);
  }

  deleteCiudad(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
