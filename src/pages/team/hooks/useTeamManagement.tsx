import { useToast } from '@/hooks/use-toast'
import { Player } from '@/types/players'
import { useState } from 'react'
import { validateSquadLimit } from '../utils/teamRules'

export default function useTeamManagement() {
  const [players,setPlayers] = useState<Player[]>([])
  const {toast} = useToast()

  const addPlayer =(player:Player)=>{
if(validateSquadLimit(players)){
toast({
    title:'Squad full!',
    description:'Max number reached!'
})
return

}
const newPlayer = {
  ...player,
  id:Date.now()
}
setPlayers(prev =>[...prev,newPlayer])
  }

  const updatePlayer = (id:number,updatePlayer:Player) =>{
    // const playerIndex = players.findIndex((p)=> p.id === id)
   

    // if(validateJerseyNumber(players,updatePlayer?.jerseyNumber)){
    //   toast({
    //         title:'Jersey number!',
    // description:'Jersey number have already been taken!'
    //   })
    // }
// setPlayers(prev => [...prev,updatePlayer])
setPlayers(prev => prev.map((p)=> p?.id === id? {...updatePlayer,id} : p))
  
  toast({
    title: "Player updated!",
    description: `${updatePlayer.name} updated successfully`
  });

  }


  const deletePlayer = (id:number)=>{
    setPlayers((prev) => prev.filter((p)=> p.id !== id))
  }

  return {
    addPlayer,
    players,
    updatePlayer,
    deletePlayer
  }
}
