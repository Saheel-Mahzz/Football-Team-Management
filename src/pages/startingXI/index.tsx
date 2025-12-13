import { Pitch } from "./components/Pitch"
import SubstituteBench from "./components/SubstituteBench"

export const XI_TEAM_ROUTE = '/starting-xi'

export default function StartingXI() {
  return (
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6  h-[100vh]">
  <div className="lg:col-span-3 h-full">
    <Pitch />
  </div>
  <div className="lg:col-span-1">
    <SubstituteBench />
  </div>
</div>
  )
}
