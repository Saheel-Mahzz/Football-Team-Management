import TeamCard from "./TeamCard"

  export const players = [{
    id: 1,
    name: "Lionel Messi",
    position: "Forward",
    jerseyNumber: 10,
    age: 36,
    avatarUrl: "",
    nationality: "Argentina"
  },
  {
    id: 2,
    name: "Lionel Messi",
    position: "Forward",
    jerseyNumber: 10,
    age: 36,
    avatarUrl: "",
    nationality: "Argentina"
  },
  {
    id: 3,
    name: "Lionel Messi",
    position: "Forward",
    jerseyNumber: 10,
    age: 36,
    avatarUrl: "",
    nationality: "Argentina"
  },
]

export const player =  {
    id: 3,
    name: "Lionel Messi",
    position: "GK",
    jerseyNumber: 10,
    age: 36,
    avatarUrl: "",
    nationality: "Argentina"
  }
// const players =[]


export default function TeamGrid() {
  if(players.length === 0){
    return(
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
        <p className="text-gray-500 text-lg">No players in the squad yet</p>
        <p className="text-gray-400 text-sm mt-2">Add your first player to get started!</p>
      </div>
    )
  }

  return (
    <TeamCard players={players}/>
  )
}
