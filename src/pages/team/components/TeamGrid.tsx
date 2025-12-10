import { Player } from "@/types/players"
import TeamCard from "./TeamCard"

// const players =[]


export default function TeamGrid({players}:{players:Player[]}) {

  console.log('total players',players)
  if(players.length === 0){
    return(
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
        <p className="text-gray-500 text-lg">No players in the squad yet</p>
        <p className="text-gray-400 text-sm mt-2">Add your first player to get started!</p>
      </div>
    )
  }

  return (
    <TeamCard players={players}/>
  )
}
