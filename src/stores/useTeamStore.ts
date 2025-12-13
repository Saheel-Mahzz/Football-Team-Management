// src/stores/useTeamStore.ts
import { validateJerseyNumber, validateSquadLimit } from '@/pages/team/utils/teamRules';
import { Player } from '@/types/players';
import { create } from 'zustand';

interface TeamStore {
  players: Player[];
  addPlayer: (player: Player) => void;
  updatePlayer: (id: number, player: Player) => void;
  deletePlayer: (id: number) => void;
  setPlayers: (players: Player[]) => void;
}

export const useTeamStore = create<TeamStore>((set,get) => ({
  players: [],
  
//   addPlayer: (player) => set((state) => ({
//     players: [...state.players, player]
//   })),

      addPlayer: (player: Player) => {
    const { players } = get();
    
    if (validateSquadLimit(players)) {
      // Toast should be in component, not store
    return { success: false, error: 'SQUAD_FULL' };
    }
    
    if (validateJerseyNumber(players, player.jerseyNumber)) {
      return { success: false, error: 'JERSEY_TAKEN' };
    }
    
    const newPlayer = { ...player, id: Date.now() };
    
    set((state) => ({
      players: [...state.players, newPlayer]
    }));
    
    return true;
  },

updatePlayer: (id: number, updatedPlayer: Player) => {
  const { players } = get();
  
  // Jersey check (exclude current player)
  const jerseyTaken = players.some(p => 
    p.jerseyNumber === updatedPlayer.jerseyNumber && 
    p.id !== id
  );
  
  if (jerseyTaken) {
    return false; // Failure
  }
  
  set((state) => ({
    players: state.players.map(p => 
      p.id === id ? { ...updatedPlayer, id } : p
    )
  }));
  
  return true; // Success
},

deletePlayer: (id: number) => {
  const { players } = get();
  const playerToDelete = players.find(p => p.id === id);
  
  if (!playerToDelete) {
    return false;
  }
  
  // Add position minimums validation here if needed
  
  set((state) => ({
    players: state.players.filter(p => p.id !== id)
  }));
  
  return playerToDelete; // Return deleted player for toast message
},
  setPlayers: (players) => set({ players }),
}));