import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SelectItem } from "@radix-ui/react-select"
import { useState } from "react"
import TeamList, { Member, TEAM_LISTS } from "./components/teamList"


export const TASK_ROUTE ='/task-lists'

type Priority ='high' | 'medium' | 'low'

interface Task{
  id:number,
  task:string,
  priority:Priority
  assignedTo?:{
    id:number ,
    value:string
  } | null
}

const TASKS_LIST: Task[] = [
  {
    id:1,
    task:'Implement crud',
    priority:'high'
  },
  {
    id:2,
    task:'List the members',
    priority:'medium'
  }
]

export default function Tasks() {
  const [tasks,setTasks]= useState<Task[]>(TASKS_LIST)
  const [selectedMember,setSelectedMember] = useState<Member | null>(null)
  const handleTask = (id:number,member:Member) =>{
setTasks((prev)=> prev.map((task)=> task.id === id ? {...task,assignedTo:member,}
:
task
))

}

const [showMembers,setShowMembers] = useState<boolean>(false)



  return (
    <>
    <div className="grid grid-cols-2 mb-4 gap-2">
      <div className="border p-3 rounded-lg border-gray-600">
        <h2 className="text-xl font-semibold">Unassigned tasks...</h2>
      {tasks.map((task)=>(
         !task.assignedTo && 
        <div className="flex gap-2">
        <p key={task.id} className="bg-slate-200 w-full flex justify-between mb-3 p-2 rounded-lg" >{task.task}
                  <Badge>{task.priority}</Badge>
        </p>
        {/* <Button onClick={()=>handleTask(task?.id)}>Assign</Button>
         */}

         <Button onClick={()=>setShowMembers(!showMembers)}>Assign</Button>
        {showMembers && <Select value={selectedMember?.value} onValueChange={(value)=>{
          const member = TEAM_LISTS.find((team) => team?.value === value)

          handleTask(task?.id,member)
        }} >
          <SelectTrigger>
            <SelectValue placeholder='Choose the member'/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {TEAM_LISTS.map((member)=>(
   <SelectItem value={member?.value}  className="cursor-pointer">
    {member?.label}
                </SelectItem>
                ))}
             
              </SelectGroup>
            </SelectContent>
            </Select>}

        </div>
      ))}
      </div>
        <div className="border p-3 rounded-lg border-gray-600">
        <h2 className="text-xl font-semibold">Assigned Tasks...</h2>
      {tasks.map((task)=>(
        task.assignedTo &&
        <div className="flex gap-2">
        <p key={task.id} className="bg-slate-200 w-full flex justify-between mb-3 p-2 rounded-lg">{task.task}
                  <Badge>{task.priority}</Badge>
        </p>

        </div>
      ))}
      </div>
    </div>
    <TeamList handleSelected={setSelectedMember}/>
    </>
  )
}
