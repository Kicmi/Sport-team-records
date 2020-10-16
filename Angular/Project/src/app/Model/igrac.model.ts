import { Nacionalnost } from "./nacionalnost.model";
import { Tim } from "./tim.model";

export class Igrac {
    id:number;
    ime:string;
    prezime:string;
    datumRodjenja:Date;
    brojReg:string;
    nacionalnostBean:Nacionalnost;
    timBean:Tim;
}