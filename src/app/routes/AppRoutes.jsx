import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthProtected from './protected/AuthProtected'
import PublicProtected from './protected/PublicProtected'
import Analytics from '../../features/analytics/ui/pages/Analytics'

const router = createBrowserRouter([{
    path: "",
    element: <AuthProtected/>,
    children: [
        {
            path: "",
            element:
        }
    ]
}, {
    path: "/main",
    element: <PublicProtected/>,
    children: [
        {
            path: "",
            element: <MainLayout/>,
            children: [
                {
                    path: "dashboard",
                    element: <Dashboard/>
                },
                {
                    path: "repositories",
                    element: <Repositories/>
                },
                {
                    path: "analytics",
                    element: <Analytics/>
                },
                {
                    path: "settings",
                    element: <Settings/>
                }
            ]
        }
    ]
}])

const AppRoutes = () => {
  return <RouterProvider router={router}/>
}

export default AppRoutes