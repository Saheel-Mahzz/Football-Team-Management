
export const TEAM_LISTS=[
    {
        id:1,
        label:'saheel',
        value:'saheel'
    },
    {
        id:2,
        label:'sneha',
        value:'sneha'
    },
    {
        id:3,
        label:'Amar',
        value:'amar'
    }
]

 export interface Member{
    id:number ,
    value:string
}

 interface ITeamList {
    handleSelected:(member:Member)=>void
}
export default function TeamList({handleSelected}:ITeamList) {
  return (
    <div className="border p-3 rounded-lg border-gray-600">
        <h2 className="text-xl font-semibold">Team List</h2>
      {TEAM_LISTS.map((team)=>(
        <p key={team.id} className="bg-slate-200 mb-3 p-2 rounded-lg" onClick={()=>handleSelected(team)}>{team?.label}</p>
      ))}
      </div>
  )
}
