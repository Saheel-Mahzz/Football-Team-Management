import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PositionSlotProps {
  position: 'GK' | 'DEF' | 'MID' | 'FWD';
  slotNumber?: number; // For multiple slots of same position
  availablePlayers: Array<{
    id: number;
    name: string;
    jerseyNumber: number;
  }>;
  selectedPlayerId?: number | null;
  onSelectPlayer: (playerId: number ) => void;
}

export default function PositionSlot({
  position,
  slotNumber,
  availablePlayers,
  selectedPlayerId,
  onSelectPlayer
}: PositionSlotProps) {
  const selectedPlayer = availablePlayers.find(p => p.id === selectedPlayerId);
  
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Select 
        value={selectedPlayerId?.toString() || ""}
        onValueChange={(value) => onSelectPlayer(Number(value))}
      >
        <SelectTrigger className={`
          w-24 h-24 rounded-full border-2 
          ${selectedPlayer 
            ? 'bg-white/30 border-white' 
            : 'bg-white/20 border-dashed border-white/40'
          }
          hover:bg-white/30 transition-colors
          flex flex-col items-center justify-center
        `}>
          <SelectValue placeholder={
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">{position}</span>
              {slotNumber && <span className="text-xs">#{slotNumber}</span>}
            </div>
          } />
        </SelectTrigger>
        
        <SelectContent className="bg-gray-900 text-white border-gray-700">
          {availablePlayers.map(player => (
            <SelectItem 
              key={player.id} 
              value={player.id.toString()}
              className="hover:bg-gray-800"
            >
              <div className="flex items-center  gap-2">
                <span className="font-medium">{player.name}</span>
                {/* <span className="text-gray-400">#{player.jerseyNumber}</span> */}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      {selectedPlayer && (
        <div className="text-center text-sm">
          <p className="font-medium truncate max-w-[80px]">{selectedPlayer.name}</p>
          <p className="text-gray-600">#{selectedPlayer.jerseyNumber}</p>
        </div>
      )}
    </div>
  );
}