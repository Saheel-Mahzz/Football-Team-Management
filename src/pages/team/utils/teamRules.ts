import { Player } from "@/types/players";

export const validateSquadLimit =(players:Player[])=> players.length >= 22

export const validateJerseyNumber=(players:Player[],jerseyNumber:number,excludeId?:number) =>{
    return players.some((p)=> p.jerseyNumber === jerseyNumber && p.id !== excludeId)
}

