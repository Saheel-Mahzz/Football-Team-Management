import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { useTeamStore } from "@/stores/useTeamStore";
import { Player } from "@/types/players";
import { User } from "lucide-react";
interface PositionSlotProps {
  position: 'GK' | 'DEF' | 'MID' | 'FWD';
  slotNumber?: number; 
  availablePlayers:Player[]
  selectedPlayerId?: number | null;
  onSelectPlayer: (playerId: number ) => void;
}

export default function PositionSlot({
  position = 'FWD',
  availablePlayers,
  selectedPlayerId,
  onSelectPlayer 
}:PositionSlotProps) {
  const {players} = useTeamStore()
  const selectedPlayer = players.find(p => p.id === selectedPlayerId);
  
  return (
    <div className="flex flex-col items-center gap-2">
      <Select 
        value={selectedPlayerId?.toString() || ""}
        onValueChange={(value) => onSelectPlayer(Number(value))}
      >
        <SelectTrigger className={`
          w-24 h-24 rounded-full border-2 
          ${selectedPlayer 
            ? 'bg-white/30 border-white shadow-md' 
            : 'bg-white/10 border-white/40 border-dashed'
          }
          hover:bg-white/40 transition-colors
          flex flex-col items-center justify-center
        `}>
          {selectedPlayer ? (
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                       <Avatar className=" border-2 border-gray-200 shadow-sm">
      <AvatarImage 
        src={selectedPlayer.avatarUrl} 
        alt={selectedPlayer.name}
        className="object-cover"
      />
      <AvatarFallback  className="bg-blue-50 text-blue-600">
        <User className="w-7 h-7" />
      </AvatarFallback>
    </Avatar>
              </div>
              <span className="font-semibold text-sm text-gray/60 text-center px-1">
                {selectedPlayer.name}
              </span>
              <span className="text-sm font-semibold text-gray/60">
                #{selectedPlayer.jerseyNumber}
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <User className="w-6 h-6 text-white/60" />
              </div>
              <span className="font-bold text-sm text-white">
                {position}
              </span>
            </div>
          )}
        </SelectTrigger>
        
        <SelectContent className="bg-slate-300 text-white border border-gray-700 rounded-lg shadow-lg min-w-[180px]">
          {availablePlayers?.length === 0 ? (
            <div className="px-3 py-2 text-sm text-gray-700">
              No {position} available
            </div>
          ) : (
            availablePlayers.map(player => (
<SelectItem 
  key={player.id} 
  value={player.id.toString()}
  className="hover:bg-gray-50 cursor-pointer transition-colors"
>
  <div className="flex items-center justify-between gap-4 py-2">
    <div className="flex items-center gap-3">
      <div className="w-7 h-7 rounded-md bg-blue-100 flex items-center justify-center">
        <span className="text-xs font-bold text-blue-700">
          #{player.jerseyNumber}
        </span>
      </div>
      <span className="font-medium text-gray-800">
        {player.name}
      </span>
    </div>
    <span className="text-xs px-2 py-1 rounded-full bg-gray-400 text-gray-700">
      {player.position}
    </span>
  </div>
</SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
      
      <span className="text-xs font-semibold text-white/80">
        {position}
      </span>
    </div>
  );
}
