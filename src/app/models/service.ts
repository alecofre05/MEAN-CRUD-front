export class Service {
    _id?: number;
    nombre: string;
    banco: string; 
    descripcion: string;
    fechaVto: Date;

    constructor(nombre: string, banco: string, descripcion: any, fechaVto: Date) {
        this.nombre = nombre;
        this.banco = banco;
        this.descripcion = descripcion;
        this.fechaVto = fechaVto;
    }
}