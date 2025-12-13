import { Player } from "@/types/players";

export const filterByPosition = (players: Player[]) => ({
  goalkeepers: players.filter(p => p.position === 'GK'),
  defenders: players.filter(p => p.position === 'DEF'),
  midfielders: players.filter(p => p.position === 'MID'),
  forwards: players.filter(p => p.position === 'FWD'),
});

export const getAvailablePlayers = (
  playersByPos: ReturnType<typeof filterByPosition>,
  selectedIds: number[]
) => ({
  goalkeepers: playersByPos.goalkeepers.filter(gk => !selectedIds.includes(gk.id)),
  defenders: playersByPos.defenders.filter(d => !selectedIds.includes(d.id)),
  midfielders: playersByPos.midfielders.filter(m => !selectedIds.includes(m.id)),
  forwards: playersByPos.forwards.filter(f => !selectedIds.includes(f.id)),
});