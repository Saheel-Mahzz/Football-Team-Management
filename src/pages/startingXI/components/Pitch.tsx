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
    <div className="w-full aspect-[2/1] bg-green-600 rounded-xl border-4 border-white p-4 h-full">
      <div className="grid grid-cols-4 grid-rows-3 h-full gap-4">
      
         <div className="col-start-2 row-start-1 flex items-center justify-center">
          <PositionSlot 
            position="FWD"
            slotNumber={1}
            availablePlayers={available?.forwards}
            selectedPlayerId={startingXI.fwd1}
            onSelectPlayer={(id) => setStartingXI('fwd1',id)}
          />
        </div>

        
    <div className="col-start-3 row-start-1 flex items-center justify-center">
          <PositionSlot 
            position="FWD"
            slotNumber={2}
            availablePlayers={available?.forwards}
            selectedPlayerId={startingXI.fwd2}
            onSelectPlayer={(id) => setStartingXI('fwd2',id)}
          />
        </div>
{[1, 2, 3, 4].map(i => (
  <div key={i} className={`col-start-${i} row-start-2 flex items-center justify-center`}>
    <PositionSlot
      position="MID"
      slotNumber={i}
      availablePlayers={available?.midfielders} 
      selectedPlayerId={startingXI[`mid${i}`]}  
onSelectPlayer={(id) => setStartingXI(`mid${i}`, id)}
    />
  </div>
))}
        {[1, 2, 3, 4].map(i => (
          <div key={i} className={`col-start-${i} row-start-3 flex items-center justify-center`}>
       <PositionSlot availablePlayers={available?.defenders} slotNumber={i} position="DEF" 
       selectedPlayerId={startingXI[`def${i}`]}
        onSelectPlayer={(id) => setStartingXI(`def${i}`, id)}
        />
          </div>
        ))}
        
        <div className="col-start-2 col-span-2 row-start-4 flex items-center justify-center">
       <PositionSlot availablePlayers={available?.goalkeepers} slotNumber={1} position="GK" selectedPlayerId={startingXI.gk1} 
      onSelectPlayer={(id) => setStartingXI(`gk1`, id)}
       />
        </div>
        
      </div>
    </div>
  );
};