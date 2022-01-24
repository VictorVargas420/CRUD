export class User{
    _id?: number;
    apellidoP: string;
    apellidoM: string;
    nombre: string;
    matricula: string;
    equipo: string;

    constructor (apellidoP:string , apellidoM:string , nombre:string , matricula:string , equipo:string){
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
        this.nombre = nombre;
        this.matricula = matricula;
        this.equipo = equipo;
    }
}