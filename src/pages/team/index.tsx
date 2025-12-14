import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { XI_TEAM_ROUTE } from "../startingXI";
import TeamGrid from "./components/TeamGrid";
import TeamHeader from "./components/TeamHeader";

export default function Team() {
  const navigate = useNavigate()
  return (
<div className="flex flex-col w-full max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
<TeamHeader />
  <TeamGrid />
  <Button onClick={()=>navigate(XI_TEAM_ROUTE)} className="my-2">Starting	XI	Management</Button>
</div>
  )
}
