import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useTeamContext } from '@/hooks/useTeamContext';
import { Player } from '@/types/players';
import { useState } from 'react';
import { getTeamStatus } from '../utils/getTeamStatus';
import TeamForm from './TeamForm';

export default function TeamHeader() {
  const {addPlayer,players} = useTeamContext()
  const [isDialogOpen,setIsDialogOpen] = useState<boolean>(false)
    const totalPlayers = players.length;
    const gkCount = players.filter((p)=>p.position === 'GK').length
    const defCount = players.filter((p)=> p.position === 'DEF').length
    const forwardCount = players.filter((p)=>p.position === 'FWD').length

    const status = getTeamStatus(totalPlayers)

    const handleAddPlayer = (data:Player)=>{
      const success = addPlayer(data)

      if(success){
        setIsDialogOpen(false)
      }
    }
  
  return (
    <>
     <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-semibold text-gray-800">Team Management</h2>
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger>
    <Button className="bg-blue-600 hover:bg-blue-700">
      Add Player
    </Button>
    </DialogTrigger>
    <DialogContent>
        <TeamForm onSubmit={handleAddPlayer} />
    </DialogContent>
    </Dialog>
  </div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
<Card className={`${status.bgColor} ${status.borderColor} p-4`}>
  <div className={`text-sm ${status.textColor}`}>Total Squad</div>
  <div className={`text-2xl font-bold ${status.textColor}`}>
    {totalPlayers}/22
  </div>
</Card>
  
  <Card className="bg-green-50 border-green-200 p-4">
    <div className="text-sm text-green-700">Goalkeepers</div>
    <div className="text-2xl font-bold text-green-800">{gkCount}
    {gkCount < 1 && <span className='text-red-500 text-sm ml-2'>(Min:1)</span> }
    </div>
  </Card>
  
  <Card className="bg-yellow-50 border-yellow-200 p-4">
    <div className="text-sm text-yellow-700">Defenders</div>
    <div className="text-2xl font-bold text-yellow-800">{defCount}

      {defCount < 4 && <span className='text-red-500 text-sm ml-2'>(Min:4)</span>}
    </div>
  </Card>
  
  <Card className="bg-red-50 border-red-200 p-4">
    <div className="text-sm text-red-700">Forwards</div>
    <div className="text-2xl font-bold text-red-800">{forwardCount}
      {forwardCount < 2 && <span className='text-red-500 text-sm ml-2'>(Min:2)</span>}
    </div>
  </Card>
</div>
</>
  )
}
