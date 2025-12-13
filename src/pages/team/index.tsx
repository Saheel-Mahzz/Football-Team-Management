import TeamGrid from "./components/TeamGrid";
import TeamHeader from "./components/TeamHeader";

export default function Team() {
  return (
<div className="flex flex-col w-full max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
<TeamHeader />
  <TeamGrid />
</div>
  )
}
