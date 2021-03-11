export class TipoDocumento {
    constructor(_id = "", nombre = "", descripcion = "") {
      this._id = _id;
      this.nombre = nombre;
      this.descripcion = descripcion;
    }
  
    _id: string;
    nombre: string;
    descripcion: string;
  }