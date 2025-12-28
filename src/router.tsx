import { createBrowserRouter } from "react-router-dom";
import DynamicForm, { DYNAMIC_FORM_ROUTE } from "./pages/dynamicTypeForm/dynamicForm";
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
        path:DYNAMIC_FORM_ROUTE,
        element:<DynamicForm/>
    },
    {
        path:TASK_ROUTE,
        element:<Tasks/>
    }
])

export default router