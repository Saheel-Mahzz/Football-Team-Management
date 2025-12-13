import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCcw, Users } from "lucide-react";

export default function SubstituteBench() {
  return (
    <Card className="border-2 border-gray-300 bg-gradient-to-b from-gray-50 to-gray-100">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Substitutes Bench
          <Badge variant="secondary" className="ml-2 bg-white text-blue-800">
            11/11
          </Badge>
        </CardTitle>
        <CardDescription className="text-blue-100">
          Players ready to replace starting XI
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-blue-100 text-blue-800">P{i}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">Player {i}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="px-2 py-0.5 bg-gray-100 rounded">#10</span>
                  <span>MID</span>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <RefreshCcw className="h-4 w-4" />
              </Button>
            </div>
          ))}
          
          <div className="text-center py-8 text-gray-500">
            <Users className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>No substitutes available</p>
            <p className="text-sm">Add more players to team squad</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-gray-50 p-4">
        <div className="text-sm text-gray-600">
          <span className="font-medium">Bench Rules:</span> 11 players max
        </div>
      </CardFooter>
    </Card>
  );
}