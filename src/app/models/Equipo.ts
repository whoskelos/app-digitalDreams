export class Equipo{
    constructor (
    public _id: string,
    public portatil: string,
    public modelo:string,
    public precio:number,
    public so:string,
    public cpu:string,
    public ram:number,
    public almacenamiento:string,
    public gama:string,
    public valoracion:number[],
    public opiniones:string[],
    public foto:string,
    public enlace:string
    ){}
}