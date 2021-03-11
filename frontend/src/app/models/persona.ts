export class Persona {
    constructor(_id = "", nombres = "", apellidos = "", idtipodocumento = "", documento = 0, lugarresidencia = "", fechanacimiento = "", email = "", telefono = 0, usuario = "", password = "") {
      this._id = _id;
      this.nombres = nombres;
      this.apellidos = apellidos;
      this.idtipodocumento = idtipodocumento;
      this.documento = documento;
      this.lugarresidencia = lugarresidencia;
      this.fechanacimiento = fechanacimiento;
      this.email = email;
      this.telefono = telefono;
      this.usuario = usuario;
      this.password = password;
    }
  
    _id: string;
    nombres: string;
    apellidos: string;
    idtipodocumento: string;
    documento: number;
    lugarresidencia: string;
    fechanacimiento: string;
    email: string;
    telefono: number;
    usuario: string;
    password: string;
  }