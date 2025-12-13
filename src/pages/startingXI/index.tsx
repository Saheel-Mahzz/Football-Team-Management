import { useTeamStore } from "@/stores/useTeamStore";
import { useState } from "react";
import { Pitch } from "./components/Pitch";
import SubstituteBench from "./components/SubstituteBench";

export const XI_TEAM_ROUTE = '/starting-xi'

export default function StartingXI() {
  const { players } = useTeamStore();
  const [startingXI, setStartingXI] = useState({
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
  });

  // Calculate substitutes
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