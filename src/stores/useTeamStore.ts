// src/stores/useTeamStore.ts
import { toast } from '@/hooks/use-toast';
import { validateJerseyNumber, validateSquadLimit } from '@/pages/team/utils/teamRules';
import { Player } from '@/types/players';
import { create } from 'zustand';

interface TeamStore {
  players: Player[];
  startingXI:Record<string,number | null>,
   setStartingXI: (slot: string, playerId: number | null) => void;
  addPlayer: (player: Player) => void;
  updatePlayer: (id: number, player: Player) => void;
  deletePlayer: (id: number) => void;
  setPlayers: (players: Player[]) => void;
}

export const useTeamStore = create<TeamStore>((set,get) => ({
  players: [],
  startingXI:{
gk1: null,
    def1: null,
    def2: null,
    def3: null,
    def4: null,
    mid1: null,
    mid2: null,
    mid3: null,
    mid4: null,
    fwd1: null,
    fwd2: null,
  },
  setStartingXI: (slot: string, playerId: number | null) => 
  set((state) => ({
    startingXI: { ...state.startingXI, [slot]: playerId }
  })),
  
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

deletePlayer: (id) => {
  const { players, startingXI } = get();
  
  // Check if player is in Starting XI
  const isInStartingXI = Object.values(startingXI).includes(id);
  
  if (isInStartingXI) {
    // Remove from Starting XI first
    const updatedStartingXI = { ...startingXI };
    Object.keys(updatedStartingXI).forEach(key => {
      if (updatedStartingXI[key] === id) {
        updatedStartingXI[key] = null;
      }
    });
    
    set({ startingXI: updatedStartingXI });
    toast({ 
      title: "Player removed from Starting XI", 
      variant: "destructive" 
    });
  }
  
  // Then delete from players
  set({ players: players.filter(p => p.id !== id) });
},
  setPlayers: (players) => set({ players }),
}));