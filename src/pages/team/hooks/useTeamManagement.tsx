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
setPlayers(prev =>[...prev,player])
console.log('successfully created',players)
  }

  return {
    addPlayer,
    players
  }
}
