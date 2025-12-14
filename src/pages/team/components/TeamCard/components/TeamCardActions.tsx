import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { getErrorMessage } from '@/pages/team/utils/errorHandler';
import { ActionResult } from '@/stores/useTeamStore';
import { Player } from '@/types/players';
import { Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import TeamForm from '../../TeamForm';

interface TeamCardActionProps {
  player: Player;
  updatePlayer: (id: number, player: Player) => ActionResult;
  deletePlayer: (id: number) => ActionResult;
}

export default function TeamCardActions({deletePlayer,player,updatePlayer}:TeamCardActionProps) {
      const [isDialogOpen,setIsDialogOpen] = useState<boolean>(false)
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
  return (
    <>
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
              <AlertDialogTitle className="text-2xl">Are you sure?</AlertDialogTitle>
              <AlertDialogDescription className="text-gray/60">
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
        </>
  )
}
