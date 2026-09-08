import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../../shared/ui/components/Sidebar'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-surface-main text-content-main flex flex-row selection:bg-blue-600 selection:text-white transition-colors duration-200">
          {/* Pure HTML Theme Switcher Input (Zero JavaScript/ReactJS logic needed) */}
          <input
            type="checkbox"
            id="theme-toggle"
            className="sr-only"
            aria-label="Toggle Theme"
          />
    
          {/* Left Sidebar */}
          <div className='sticky top-0 h-min'><Sidebar/></div>
    
          {/* Main Content Area */}
          <Outlet/>
          
        </div>

  )
}

export default MainLayout