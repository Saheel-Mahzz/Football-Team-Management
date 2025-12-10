import { Player } from "@/types/players";

export const validateSquadLimit =(players:Player[])=> players.length >22

export const validateJerseyNumber=(players:Player[],jerseyNumber) =>{
    return players.some((p)=> p.jerseyNumber === jerseyNumber)
}

// export const validatePositionMinimums = (players: Player[], newPlayer: Player) => {
//   const getCount = (pos: Position) => 
//     players.filter(p => p.position === pos).length + (newPlayer.position === pos ? 1 : 0);

//   const checks = [
//     { pos: 'GK', min: 1, count: getCount('GK') },
//     { pos: 'DEF', min: 4, count: getCount('DEF') },
//     { pos: 'MID', min: 4, count: getCount('MID') },
//     { pos: 'FWD', min: 2, count: getCount('FWD') }
//   ];

//   const failed = checks.find(c => c.count < c.min);
//   return failed ? `Need at least ${failed.min} ${failed.pos} player${failed.min > 1 ? 's' : ''}` : null;
// };