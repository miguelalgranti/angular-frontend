export class persona {
id?: number;
nombre: string;
apellido: string;
img: string;

constructor(nombre: string, apellido: string, img: string, Educacion: any, Experiencia: any) {
this.nombre = nombre;
this.apellido = apellido;
this.img = img;
}
}