import { createBrowserRouter } from "react-router-dom";
import StartingXI, { XI_TEAM_ROUTE } from "./pages/startingXI";
import Tasks, { TASK_ROUTE } from "./pages/TaskList";
import Team from "./pages/team";
import Test, { TEST_ROUTE } from "./test";
import Testing, { TESTING_ROUTE } from "./testing";


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
    },
    {
        path:TEST_ROUTE,
        element:<Test/>
    },
    {
        path:TESTING_ROUTE,
        element:<Testing/>
    }
])

export default router