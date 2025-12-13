import { useTeamContext } from "@/hooks/useTeamContext"
import TeamCard from "./TeamCard"

// const players =[]


export default function TeamGrid() {
  const {players,updatePlayer,deletePlayer} = useTeamContext()

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
      <div className="grid md:grid-cols-3 gap-2">
    {players.map((player)=>(
   <TeamCard player={player} updatePlayer={updatePlayer} deletePlayer={deletePlayer}/>
    ))}
 
    </div>
  )
}
