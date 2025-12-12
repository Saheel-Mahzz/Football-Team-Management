import TeamGrid from "./components/TeamGrid";
import TeamHeader from "./components/TeamHeader";
import useTeamManagement from "./hooks/useTeamManagement";

export default function Team() {
  const {players,addPlayer,updatePlayer,deletePlayer} = useTeamManagement()
  return (
<div className="flex flex-col w-full max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
<TeamHeader addPlayer={addPlayer} players={players}/>
  <TeamGrid players={players} updatePlayer={updatePlayer} deletePlayer={deletePlayer}/>
</div>
  )
}
