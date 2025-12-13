import { useTeamStore } from "@/stores/useTeamStore";
import { Pitch } from "./components/Pitch";
import SubstituteBench from "./components/SubstituteBench";

export const XI_TEAM_ROUTE = '/starting-xi'

export default function StartingXI() {
  const { players,startingXI,setStartingXI } = useTeamStore();
 
  const selectedIds = Object.values(startingXI).filter(Boolean);
  const substitutes = players.filter(p => !selectedIds.includes(p.id));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[100vh]">
      <div className="lg:col-span-3 h-full">
        <Pitch 
          startingXI={startingXI}
          setStartingXI={setStartingXI}
          players={players}
        />
      </div>
      <div className="lg:col-span-1">
        <SubstituteBench players={substitutes} />
      </div>
    </div>
  );
}