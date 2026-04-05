import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import HomeLayouts from "../Layouts/HomeLayout/HomeLayouts";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayouts,
        children : [
            {
                index: true, 
                Component: Home
            }
        ]
    }
])