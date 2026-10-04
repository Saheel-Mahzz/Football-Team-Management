import { Player } from "@/types/players";
import { filterByPosition, getAvailablePlayers } from "../utils/teamFilters";
import PositionSlot from "./PositionSlot";
interface PitchProps {
  startingXI: Record<string, number | null>;
  setStartingXI: (slot: string, playerId: number | null) => void;
  players: Player[];
}

export function Pitch({startingXI,setStartingXI,players}:PitchProps){
const playersByPos = filterByPosition(players);
const selectedIds = Object.values(startingXI).filter(Boolean);
const available = getAvailablePlayers(playersByPos, selectedIds as number[]);
  return (
<div className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2/1] bg-green-600 rounded-xl border-2 sm:border-4 border-white p-2 sm:p-4 h-full min-h-[420px] sm:min-h-[500px]">
  <div className="grid grid-cols-4 grid-rows-4 h-full gap-1 sm:gap-2 lg:gap-4">
    
    {/* Forwards */}
    <div className="col-start-2 row-start-1 flex items-center justify-center">
      <PositionSlot 
        position="FWD"
        slotNumber={1}
        availablePlayers={available?.forwards}
        selectedPlayerId={startingXI.fwd1}
        onSelectPlayer={(id) => setStartingXI('fwd1', id)}
      />
    </div>

    <div className="col-start-3 row-start-1 flex items-center justify-center">
      <PositionSlot 
        position="FWD"
        slotNumber={2}
        availablePlayers={available?.forwards}
        selectedPlayerId={startingXI.fwd2}
        onSelectPlayer={(id) => setStartingXI('fwd2', id)}
      />
    </div>

    {/* Midfielders */}
    {[1, 2, 3, 4].map(i => (
      <div 
        key={`mid-${i}`} 
        style={{ gridColumnStart: i }}
        className="row-start-2 flex items-center justify-center"
      >
        <PositionSlot
          position="MID"
          slotNumber={i}
          availablePlayers={available?.midfielders} 
          selectedPlayerId={startingXI[`mid${i}`]}  
          onSelectPlayer={(id) => setStartingXI(`mid${i}`, id)}
        />
      </div>
    ))}

    {/* Defenders */}
    {[1, 2, 3, 4].map(i => (
      <div 
        key={`def-${i}`} 
        style={{ gridColumnStart: i }}
        className="row-start-3 flex items-center justify-center"
      >
        <PositionSlot 
          position="DEF"
          slotNumber={i}
          availablePlayers={available?.defenders}
          selectedPlayerId={startingXI[`def${i}`]}
          onSelectPlayer={(id) => setStartingXI(`def${i}`, id)}
        />
      </div>
    ))}
    
    {/* Goalkeeper */}
    <div className="col-start-2 col-span-2 row-start-4 flex items-center justify-center">
      <PositionSlot 
        position="GK"
        slotNumber={1}
        availablePlayers={available?.goalkeepers} 
        selectedPlayerId={startingXI.gk1} 
        onSelectPlayer={(id) => setStartingXI('gk1', id)}
      />
    </div>

  </div>
</div>
  );
};