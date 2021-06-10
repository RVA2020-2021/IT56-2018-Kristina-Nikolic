import { Departman } from "../Departman/departman";
import { Status } from "../Status/status";

export class Student {
    id: number;
    ime: string;
    prezime: string;
    brojIndeksa: string;
    status: Status;
    departman: Departman;
}
