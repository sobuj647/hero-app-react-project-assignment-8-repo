import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index:true,
        path: '/',
        Component: Home
      },
      {
        path: '/apps',
        Component: Apps
      },
      {
        path: '/installation',
        Component: Installation
      }
    ]
  },
]);