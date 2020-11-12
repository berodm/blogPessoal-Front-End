import { Tema } from './Tema';

export class Postagem {
public id: number;
public titulo: string;
public texto: string;
public date: Date;
public tema: Tema;
//aqui não tem [] porque uma postagem só tem um tema.
}