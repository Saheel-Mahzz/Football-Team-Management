import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import TeamForm from './TeamForm'

export default function TeamHeader() {
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
        <TeamForm/>
    </DialogContent>
    </Dialog>
  </div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
  <Card className="bg-blue-50 border-blue-200 p-4">
    <div className="text-sm text-blue-700">Total Squad</div>
    <div className="text-2xl font-bold text-blue-800">3/22</div>
  </Card>
  
  <Card className="bg-green-50 border-green-200 p-4">
    <div className="text-sm text-green-700">Goalkeepers</div>
    <div className="text-2xl font-bold text-green-800">1</div>
  </Card>
  
  <Card className="bg-yellow-50 border-yellow-200 p-4">
    <div className="text-sm text-yellow-700">Defenders</div>
    <div className="text-2xl font-bold text-yellow-800">1</div>
  </Card>
  
  <Card className="bg-red-50 border-red-200 p-4">
    <div className="text-sm text-red-700">Forwards</div>
    <div className="text-2xl font-bold text-red-800">1</div>
  </Card>
</div>
</>
  )
}
