import { createBrowserRouter } from "react-router-dom";
import StartingXI, { XI_TEAM_ROUTE } from "./pages/startingXI";
import Team from "./pages/team";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Team/>
    },
    {
        path:XI_TEAM_ROUTE,
        element:<StartingXI/>
    }
])

export default router