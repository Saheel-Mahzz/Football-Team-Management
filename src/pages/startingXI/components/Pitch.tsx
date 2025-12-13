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
const goalKeepers = players?.filter((p) => p.position === 'GK')
const forwards = players?.filter((p)=> p.position === 'FWD')
const midFielders = players?.filter((p)=> p.position === 'MID')
const defenders = players?.filter((p)=> p.position === 'DEF')




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
            slotNumber={2}
            availablePlayers={forwards}
            selectedPlayerId={startingXI.fwd1}
            onSelectPlayer={(id) => setStartingXI({...startingXI, fwd1: id})}
          />
        </div>
{[1, 2, 3, 4].map(i => (
  <div key={i} className={`col-start-${i} row-start-2 flex items-center justify-center`}>
    <PositionSlot
      position="MID"
      slotNumber={i}
      availablePlayers={midFielders}  // From props
      selectedPlayerId={startingXI[`mid${i}`]}  // From state
      onSelectPlayer={(id) => setStartingXI({...startingXI, [`mid${i}`]: id})}
    />
  </div>
))}
        {[1, 2, 3, 4].map(i => (
          <div key={i} className={`col-start-${i} row-start-3 flex items-center justify-center`}>
       <PositionSlot availablePlayers={defenders} slotNumber={i} position="DEF" selectedPlayerId={startingXI[`def${i}`]} onSelectPlayer={(id) => setStartingXI({...startingXI,[`def${i}`]:id})}/>
          </div>
        ))}
        
        <div className="col-start-2 col-span-2 row-start-4 flex items-center justify-center">
       <PositionSlot availablePlayers={goalKeepers} slotNumber={1} position="GK" selectedPlayerId={startingXI.gk1} onSelectPlayer={(id)=> setStartingXI({...startingXI,gk1:id})}/>
        </div>
        
      </div>
    </div>
  );
};