export class Proyecto {
    id? : number;
    nombreP : string;
    descripcionP : string;
    fechaP : string;
    imagenP : string;

    constructor( nombreP: string, descripcionP: string, fechaP: string, imagenP: string) {
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.fechaP = fechaP;
        this.imagenP = imagenP;
    }
}