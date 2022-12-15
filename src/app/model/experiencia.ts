export class Experiencia {
    id? : number;
    institucionE : string;
    descripcionE : string;
    periodoE : string;
    imagenE : string;

    constructor( institucionE: string, descripcionE: string, periodoE: string, imagenE: string) {
        this.institucionE = institucionE;
        this.descripcionE = descripcionE;
        this.periodoE = periodoE;
        this.imagenE = imagenE;
    }
}
