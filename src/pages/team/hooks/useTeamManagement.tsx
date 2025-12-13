import { useToast } from '@/hooks/use-toast'
import { Player } from '@/types/players'
import { useState } from 'react'
import { validateJerseyNumber, validateSquadLimit } from '../utils/teamRules'

export default function useTeamManagement() {
  const [players,setPlayers] = useState<Player[]>([])
  const {toast} = useToast()

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
    setPlayers((prev) => prev.filter((p)=> p.id !== id))
    toast({
      title:'Player Deleted',
      description:'Player deleted succesfully!'
    })
  }

  return {
    addPlayer,
    players,
    updatePlayer,
    deletePlayer
  }
}

