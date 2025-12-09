import { createBrowserRouter } from "react-router-dom";
import Team from "./pages/team";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Team/>
    }
])

export default router