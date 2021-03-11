import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { TipoDocumento } from "../models/tipodocumento";

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  selectedTipoDocumento: TipoDocumento;
  tipodocumentos: TipoDocumento[];
  readonly URL_API = "http://localhost:4000/api/tipodocumento";

  constructor(private http: HttpClient) {
    this.selectedTipoDocumento = new TipoDocumento();
  }

  postTipoDocumento(tipodocumento: TipoDocumento) {
    return this.http.post(this.URL_API, tipodocumento);
  }

  getTipoDocumentos() {
    return this.http.get<TipoDocumento[]>(this.URL_API);
  }

  putTipoDocumento(tipodocumento: TipoDocumento) {
    return this.http.put(this.URL_API + `/${tipodocumento._id}`, tipodocumento);
  }

  deleteTipoDocumento(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}