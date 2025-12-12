// PlayerCard.tsx
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Edit, Trash2 } from "lucide-react";
import TeamForm from "./TeamForm";

const TeamCard = ({player,updatePlayer,deletePlayer}) => {

  return (


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
      <Dialog>
        <DialogTrigger>          <Button 
              variant="outline" 
              size="sm" 
              className="gap-2 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-colors w-full"
            >
              <Edit className="w-4 h-4" />
              Edit
            </Button>
      </DialogTrigger>

<DialogContent>
  <TeamForm initialData={player} onSubmit={(data)=>updatePlayer(player.id,data)}/>
</DialogContent>
      </Dialog>
     <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button 
              variant="destructive" 
              size="sm" 
              className="gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete <strong>{player.name}</strong> from your team. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction 
                className="bg-red-600 hover:bg-red-700"
              onClick={()=>deletePlayer(player?.id)}

              >
                Delete Player
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    </CardFooter>
  </Card>
  );
};

export default TeamCard;