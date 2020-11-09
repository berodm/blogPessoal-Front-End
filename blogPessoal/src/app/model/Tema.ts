import { Postagem } from './Postagem';

export class Tema { 
public id: number;
public descricao: string;
public postagem: Postagem[];
//aqui tem [] pois um tema tem varias postagens. 
}