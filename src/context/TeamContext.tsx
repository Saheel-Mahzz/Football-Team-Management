import { useToast } from '@/hooks/use-toast';
import { validateJerseyNumber, validateSquadLimit } from '@/pages/team/utils/teamRules';
import { Player } from '@/types/players';
import { createContext, useState } from 'react';

export interface TeamContextType {
  players: Player[];
  addPlayer: (player: Player) => void;
  updatePlayer: (id: number, player: Player) => void;
  deletePlayer: (id: number) => void;
}

export const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const TeamProvider = ({ children }: { children: React.ReactNode }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const {toast} =useToast()
  


    const addPlayer =(player:Player)=>{
  if(validateSquadLimit(players)){
  toast({
      title:'Squad full!',
      description:'Max number reached!'
  })
  return false
  
  }
  if(validateJerseyNumber(players,player?.jerseyNumber)){
      toast({
              title:'Jersey number!',
      description:'Jersey number have already been taken!'
        })
        return false
  }
  const newPlayer = {
    ...player,
    id:Date.now()
  }
  toast({
      title:'Player added',
      description:'New Player successfully added!'
  })
  setPlayers(prev =>[...prev,newPlayer])
  return true
    }
  
    const updatePlayer = (id:number,updatePlayer:Player) =>{
      // const playerIndex = players.findIndex((p)=> p.id === id)
  if(validateJerseyNumber(players,updatePlayer?.jerseyNumber,id)){
          toast({
              title:'Jersey number!',
      description:'Jersey number have already been taken!'
        })
        return false
  }
  setPlayers(prev => prev.map((p)=> p?.id === id? {...updatePlayer,id} : p))
    
    toast({
      title: "Player updated!",
      description: `${updatePlayer.name} updated successfully`
    });
    return true
  
    }

    const deletePlayer = (id:number)=>{
        players.filter((player) => player.id !== id)
    }

  return (
    <TeamContext.Provider value={{ players, addPlayer, updatePlayer, deletePlayer }}>
      {children}
    </TeamContext.Provider>
  );
};

