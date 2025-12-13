import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTeamStore } from "@/stores/useTeamStore";
import { useState } from "react";
import PositionSlot from "./PositionSlot";

export function Pitch(){
    const [startingXI, setStartingXI] = useState<Record<string,number | null>>({
  gk1: null,     // Goalkeeper
  def1: null,    // Defender 1
  def2: null,    // Defender 2
  def3: null,    // Defender 3  
  def4: null,    // Defender 4
  mid1: null,    // Midfielder 1
  mid2: null,    // Midfielder 2
  mid3: null,    // Midfielder 3
  mid4: null,    // Midfielder 4
  fwd1: null,    // Forward 1
  fwd2: null,    // Forward 2
});

// const {players} = useTeamContext()
const {players} = useTeamStore()
console.log('playesssssrs',players)


const forwards = [
  {
    id: 1,
    name: "Lionel Messi",
    jerseyNumber: 10,
    position: "FWD"
  },
  {
    id: 2, 
    name: "Cristiano Ronaldo",
    jerseyNumber: 7,
    position: "FWD"
  },
  {
    id: 3,
    name: "Kylian Mbappé",
    jerseyNumber: 9,
    position: "FWD"
  }
];
  return (
    <div className="w-full aspect-[2/1] bg-green-600 rounded-xl border-4 border-white p-4 h-full">
      <div className="grid grid-cols-4 grid-rows-3 h-full gap-4">
{/*         
        <div className="col-start-2 row-start-1 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            FWD
          </div>
        </div> */}
         <div className="col-start-2 row-start-1 flex items-center justify-center">
          <PositionSlot 
            position="FWD"
            slotNumber={1}
            availablePlayers={forwards}
            selectedPlayerId={startingXI.fwd1}
            onSelectPlayer={(id) => setStartingXI({...startingXI, fwd1: id})}
          />
        </div>
        {/* <div className="col-start-3 row-start-1 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            FWD
          </div>
        </div> */}
        
    <div className="col-start-3 row-start-1 flex items-center justify-center">
          <PositionSlot 
            position="FWD"
            slotNumber={1}
            availablePlayers={forwards}
            selectedPlayerId={startingXI.fwd1}
            onSelectPlayer={(id) => setStartingXI({...startingXI, fwd1: id})}
          />
        </div>
         {[1, 2, 3, 4].map(i => (
  <div key={i} className="flex items-center justify-center col-start-${i} row-start-2">
    <Select>
      <SelectTrigger className="w-20 h-20 bg-white/20 rounded-full border-2 border-dashed border-white/40 hover:bg-white/30">
        <SelectValue placeholder="MID" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="messi">Messi #10</SelectItem>
        <SelectItem value="ronaldo">Ronaldo #7</SelectItem>
        <SelectItem value="neymar">Neymar #11</SelectItem>
      </SelectContent>
    </Select>
  </div>
))}
        {[1, 2, 3, 4].map(i => (
          <div key={i} className={`col-start-${i} row-start-3 flex items-center justify-center`}>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              DEF
            </div>
          </div>
        ))}
        
        <div className="col-start-2 col-span-2 row-start-4 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            GK
          </div>
        </div>
        
      </div>
    </div>
  );
};