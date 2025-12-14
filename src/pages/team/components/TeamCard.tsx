// PlayerCard.tsx
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { getErrorMessage } from "@/pages/team/utils/errorHandler";
import { ActionResult } from "@/stores/useTeamStore";
import { Player } from "@/types/players";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Edit, Trash2, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import TeamForm from "./TeamForm";

interface TeamCardProps {
  player: Player;
  updatePlayer: (id: number, player: Player) => ActionResult;
  deletePlayer: (id: number) => ActionResult;
}
const TeamCard = ({player,updatePlayer,deletePlayer}:TeamCardProps) => {

  const [isDialogOpen,setIsDialogOpen] = useState<boolean>(false)

  const showDeleteToast = (wasInStartingXI: boolean) => {
  if (wasInStartingXI) {
    toast.warning("Player was in Starting XI! Removed and deleted.");
  } else {
    toast.success("Player deleted Successfully!");
  }
};
  const handleDeletePlayer = (id: number) => {
  const result = deletePlayer(id);
  
  if (result?.success) {
    showDeleteToast(result.isInStartingXI as boolean);
  }
};

const handleUpdatePlayer = (id:number,player:Player) =>{
const result = updatePlayer(id,player)
const {success,error} = result
if (success) {
    toast.success("Player updated Successfully!");
  setIsDialogOpen(false);
} else if (error) {
  toast.error(getErrorMessage(error))
}
}
  return (


  <Card className="border shadow-sm hover:shadow-md transition-shadow w-full">
<CardContent className="pt-6">
  <div className="flex gap-4 items-start">
    {/* Avatar */}
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
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger> 
           <Button 
              variant="outline" 
              size="sm" 
              className="gap-2 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-colors w-full"
            >
              <Edit className="w-4 h-4" />
              Edit
            </Button>
      </DialogTrigger>

<DialogContent>
  <TeamForm initialData={player} onSubmit={(data)=>handleUpdatePlayer(player.id,data)}   onCancel={() => setIsDialogOpen(false)}/>
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
              onClick={()=>handleDeletePlayer(player?.id)}

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