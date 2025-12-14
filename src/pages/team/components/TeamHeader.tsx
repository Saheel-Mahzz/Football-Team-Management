import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useTeamStore } from '@/stores/useTeamStore';
import { getErrorMessage } from '@/types/errorHandler';
import { Player } from '@/types/players';
import { CircleAlert, Users } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { getPositionCount, getTeamStatusColor } from '../utils/teamStatus';
import TeamForm from './TeamForm';

export default function TeamHeader() {
  const {addPlayer,players} = useTeamStore()
  const [isDialogOpen,setIsDialogOpen] = useState<boolean>(false)
  const {defender,goalKeeper,forward,mid,totalPlayers} = getPositionCount(players)
  const status = getTeamStatusColor(totalPlayers)
  const isSquadFull = totalPlayers>=22

    const handleAddPlayer = (data:Player)=>{
   const result = addPlayer(data);
const { success, error } = result;
if (success) {
    toast.success("Player added Successfully!");
  setIsDialogOpen(false);
} else if (error) {
  toast.error(getErrorMessage(error))
}
    }
  return (
    <>
<div className="flex justify-between items-center mb-6">
  <div>
    <h2 className="text-2xl font-semibold text-gray-800">Team Management</h2>
<div className="flex items-center gap-2 mt-2">
<Badge className={`
  ${status.bgColor} ${status.textColor} border-0 
  px-4 py-2 text-base font-bold
  flex items-center gap-2
`}>
  <Users className="w-4 h-4" />
  <span className="text-lg">{totalPlayers}</span>
  <span className="text-gray-600">/22</span>
  <span className="font-normal">Players</span>
</Badge>
  

</div>
  </div>
    <TooltipProvider>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <div className="inline-block">
              <Button
                className={` ${isSquadFull ?'cursor-none' : 'cursor-pointer'}`}
                disabled={isSquadFull}
                onClick={() => !isSquadFull && setIsDialogOpen(true)}
              >
                Add Player
              </Button>
            </div>
          </TooltipTrigger>
          {isSquadFull && (
            <TooltipContent side="top" className="max-w-xs">
              <p className="font-medium flex gap-2 text-red-600">
                <span> <CircleAlert width={20} height={20} /></span>Squad Full!</p>
              <p className="text-sm text-gray-600">
                Maximum 22 players allowed. Remove some players before adding new ones.
              </p>
            </TooltipContent>
          )}
        </Tooltip>
        <DialogContent>
          <TeamForm onSubmit={handleAddPlayer} />
        </DialogContent>
      </Dialog>
    </TooltipProvider>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
  <Card className="bg-blue-50 border-blue-200 p-4">
    <div className="text-sm text-blue-700">Goalkeepers</div>
    <div className="text-2xl font-bold text-blue-800">{goalKeeper}
      {goalKeeper < 1 && <span className='text-red-500 text-sm ml-2'>(Min:1)</span>}
    </div>
  </Card>
  
  <Card className="bg-green-50 border-green-200 p-4">
    <div className="text-sm text-green-700">Defenders</div>
    <div className="text-2xl font-bold text-green-800">{defender}
      {defender < 4 && <span className='text-red-500 text-sm ml-2'>(Min:4)</span>}
    </div>
  </Card>
  
  <Card className="bg-yellow-50 border-yellow-200 p-4">
    <div className="text-sm text-yellow-700">Midfielders</div>
    <div className="text-2xl font-bold text-yellow-800">{mid}
      {mid < 4 && <span className='text-red-500 text-sm ml-2'>(Min:4)</span>}
    </div>
  </Card>
  
  <Card className="bg-red-50 border-red-200 p-4">
    <div className="text-sm text-red-700">Forwards</div>
    <div className="text-2xl font-bold text-red-800">{forward}
      {forward < 2 && <span className='text-red-500 text-sm ml-2'>(Min:2)</span>}
    </div>
  </Card>
</div>
</>
  )
}
