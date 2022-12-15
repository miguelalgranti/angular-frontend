export class Educacion {
    id? : number;
    institucionEd : string;
    descripcionEd : string;
    periodoEd : string;
    imagenEd : string;

    constructor( institucionEd: string, descripcionEd: string, periodoEd: string, imagenEd: string) {
        this.institucionEd = institucionEd;
        this.descripcionEd = descripcionEd;
        this.periodoEd = periodoEd;
        this.imagenEd = imagenEd;
    }
}