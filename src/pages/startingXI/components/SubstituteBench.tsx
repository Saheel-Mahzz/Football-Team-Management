import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Player } from "@/types/players";
import { AlertCircle, RefreshCcw, Users } from "lucide-react";

export default function SubstituteBench({ players }: { players: Player[] }) {
const isSquadOverCapacity = players.length > 11;
  
  return (
    <Card className="border-2 border-gray-300 bg-gradient-to-b from-gray-50 to-gray-100">
      <CardHeader className={`${isSquadOverCapacity ? 'bg-gradient-to-r from-orange-600 to-orange-800' : 'bg-gradient-to-r from-blue-600 to-blue-800'} text-white`}>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Substitutes Bench
          <Badge variant="secondary" className={`ml-2 ${isSquadOverCapacity ? 'bg-orange-100 text-orange-800' : 'bg-white text-blue-800'}`}>
            {players.length}/11
          </Badge>
        </CardTitle>
        <CardDescription className="text-blue-100">
          {isSquadOverCapacity
            ? "Select 11 players for Starting XI first" 
            : "Players ready to replace starting XI"}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-4">
        {isSquadOverCapacity ? (
          <div className="text-center p-6 space-y-4">
            <Users className="h-16 w-16 mx-auto text-gray-400" />
            <div>
              <h3 className="font-semibold text-lg">Welcome to Starting XI</h3>
              <p className="text-gray-600 text-sm mt-2">
                You have {players.length} players in your squad.
              </p>
              <p className="text-gray-600 text-sm">
                Select <strong>11 players</strong> on the pitch to form your Starting XI.
              </p>
              <p className="text-gray-600 text-sm">
                The remaining 11 will appear here as substitutes.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {players.slice(0, 11).map(player => (
              <div key={player.id} className="flex items-center gap-3 p-3 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-blue-100 text-blue-800">
                    {player.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{player.name}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="px-2 py-0.5 bg-gray-100 rounded">#{player.jerseyNumber}</span>
                    <span>{player.position}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <RefreshCcw className="h-4 w-4" />
                </Button>
              </div>
            ))}
            
            {players.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <Users className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>No substitutes available</p>
                <p className="text-sm">All players are in Starting XI</p>
              </div>
            )}
          </div>
        )}
        
        {isSquadOverCapacity && (
          <Alert className="mt-4 bg-orange-50 border-orange-200">
            <AlertCircle className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-orange-700">
              <strong>Note:</strong> Bench shows {players.length} players. Select 11 for Starting XI to reduce to 11 substitutes.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      
      <CardFooter className="border-t bg-gray-50 p-4">
        <div className="text-sm text-gray-600">
          <span className="font-medium">Bench Rules:</span> Maximum 11 substitutes
        </div>
      </CardFooter>
    </Card>
  );
}