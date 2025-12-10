import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Player } from '@/types/players';
import TeamForm from './TeamForm';

export default function TeamHeader({addPlayer,players}:{players:Player[]}) {

    const totalPlayers = players.length;
    const gkCount = players.filter((p)=>p.position === 'GK').length
    const defCount = players.filter((p)=> p.position === 'DEF').length
    const forwardCount = players.filter((p)=>p.position === 'FWD').length
  
  return (
    <>
     <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-semibold text-gray-800">Team Management</h2>
    <Dialog>
        <DialogTrigger>
    <Button className="bg-blue-600 hover:bg-blue-700">
      Add Player
    </Button>
    </DialogTrigger>
    <DialogContent>
        <TeamForm onSubmit={addPlayer} />
    </DialogContent>
    </Dialog>
  </div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
  <Card className="bg-blue-50 border-blue-200 p-4">
    <div className="text-sm text-blue-700">Total Squad</div>
    <div className="text-2xl font-bold text-blue-800">{totalPlayers}/22</div>
  </Card>
  
  <Card className="bg-green-50 border-green-200 p-4">
    <div className="text-sm text-green-700">Goalkeepers</div>
    <div className="text-2xl font-bold text-green-800">{gkCount}</div>
  </Card>
  
  <Card className="bg-yellow-50 border-yellow-200 p-4">
    <div className="text-sm text-yellow-700">Defenders</div>
    <div className="text-2xl font-bold text-yellow-800">{defCount}</div>
  </Card>
  
  <Card className="bg-red-50 border-red-200 p-4">
    <div className="text-sm text-red-700">Forwards</div>
    <div className="text-2xl font-bold text-red-800">{forwardCount}</div>
  </Card>
</div>
</>
  )
}
