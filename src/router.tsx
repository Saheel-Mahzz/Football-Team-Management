import { createBrowserRouter } from "react-router-dom";
import StartingXI, { XI_TEAM_ROUTE } from "./pages/startingXI";
import Tasks, { TASK_ROUTE } from "./pages/TaskList";
import Team from "./pages/team";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Team/>
    },
    {
        path:XI_TEAM_ROUTE,
        element:<StartingXI/>
    },
 
    {
        path:TASK_ROUTE,
        element:<Tasks/>
    }
])

export default router