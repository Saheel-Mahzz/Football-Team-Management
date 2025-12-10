// PlayerCard.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Player } from "@/types/players";

const TeamCard = ({players}:{players:Player[]}) => {
  // Static data for ONE player


  return (
  <div className="grid md:grid-cols-3 gap-2">

    {players?.map((player)=>(
  <Card className="border shadow-sm hover:shadow-md transition-shadow w-full">
    <CardContent className="pt-6 ">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {player.name}
          </h3>
          <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm inline-block">
            #{player.jerseyNumber}
          </div>
        </div>
        <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-medium border border-blue-200">
          {player.position}
        </div>
      </div>
      
      <div className="space-y-3 text-gray-600">
        <div className="flex items-center">
          <span className="w-24 font-medium">Age:</span>
          <span>{player.age}</span>
        </div>
        <div className="flex items-center">
          <span className="w-24 font-medium">Nationality:</span>
          <span>{player.nationality}</span>
        </div>
      </div>
    </CardContent>

    <CardFooter className="grid md:grid-cols-2 gap-2 border-t pt-4">
      <Button variant="outline" size="sm" className="px-4">
        Edit
      </Button>
      <Button variant="destructive" size="sm" className="px-4">
        Delete
      </Button>
    </CardFooter>
  </Card>
    ))}



</div>
  );
};

export default TeamCard;