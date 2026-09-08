import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthProtected from './protected/AuthProtected'
import PublicProtected from './protected/PublicProtected'
import DashboardPage from '../../features/dashboard/ui/pages/DashboardPage'
import RepoCollection from '../../features/repositoryCollection/ui/pages/RepoCollection'
import AnalyticsPage from '../../features/analytics/ui/pages/AnalyticsPage'
import SettingsPage from '../../features/settings/ui/pages/SettingsPage'
import RepoAdd from '../../features/repoAdd/ui/pages/RepoAdd'
import MainLayout from '../layout/MainLayout'

const router = createBrowserRouter([{
    path: "",
    element: <AuthProtected/>,
    children: [
        {
            path: "",
            element: <RepoAdd/>
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
                    element: <DashboardPage />
                },
                {
                    path: "repos",
                    element: <RepoCollection/>
                },
                {
                    path: "analytics",
                    element: <AnalyticsPage/>
                },
                {
                    path: "settings",
                    element: <SettingsPage/>
                }
            ]
        }
    ]
}])

const AppRoutes = () => {
  return <RouterProvider router={router}/>
}

export default AppRoutes