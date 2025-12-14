// PlayerCard.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ActionResult } from "@/stores/useTeamStore";
import { Player } from "@/types/players";
import { User } from "lucide-react";
import TeamCardActions from "./components/TeamCardActions";

interface TeamCardProps {
  player: Player;
  updatePlayer: (id: number, player: Player) => ActionResult;
  deletePlayer: (id: number) => ActionResult;
}
const TeamCard = ({player,updatePlayer,deletePlayer}:TeamCardProps) => {

  return (
  <Card className="border shadow-sm hover:shadow-md transition-shadow w-full">
<CardContent className="pt-6">
  <div className="flex gap-4 items-start">
    <Avatar className="w-16 h-16 border-2 border-gray-200 shadow-sm">
      <AvatarImage 
        src={player.avatarUrl} 
        alt={player.name}
        className="object-cover"
      />
      <AvatarFallback className="bg-blue-50 text-blue-600">
        <User className="w-7 h-7" />
      </AvatarFallback>
    </Avatar>
    
    <div className="flex-1">
      <div className="flex items-start justify-between gap-2 mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {player.name}
        </h3>
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
          {player.position}
        </Badge>
      </div>
      
      <div className="flex items-center gap-3 w-full">
        <Badge variant="secondary" className="font-bold text-base px-3 py-1">
          {player.jerseyNumber}
        </Badge>
        <div className="flex items-center gap-2 text-base">
          <span className="text-gray-500">Age:</span>
          <span className="font-bold text-gray-900">{player.age}</span>
        </div>
      </div>
    </div>
  </div>
</CardContent>
    <CardFooter className="grid md:grid-cols-2 gap-2 border-t pt-4">
     <TeamCardActions deletePlayer={deletePlayer} player={player} updatePlayer={updatePlayer}/>
    </CardFooter>
  </Card>
  );
};

export default TeamCard;