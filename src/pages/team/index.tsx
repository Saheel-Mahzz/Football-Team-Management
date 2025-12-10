import PlayerForm from "@/components/players/playerForm";

export default function Team() {
  return (
<div className="flex flex-col w-full max-w-3xl mx-auto bg-white  rounded-xl shadow-2xl border border-gray-200 p-4">
<h2 className="text-2xl font-semibold">Team Managment</h2>


      <PlayerForm/>
    </div>
  )
}
