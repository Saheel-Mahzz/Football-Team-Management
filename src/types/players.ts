export type Position = 'GK' | 'DEF' | 'MID' | 'FWD'

export interface Player{
    id:number,
    name:string,
    position:Position,
    jerseyNumber:number,
    age:number,
    avatar?:string,
    nationality?:string
}