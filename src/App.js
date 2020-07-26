import React, { useEffect } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from './components/layout/header/header.component'
import { Main } from './components/layout/main/main.component'
import { Aside } from './components/layout/aside/aside.component'
import { ApplicationBar } from './components/application-bar/application-bar.component'
import { AccountSidebar } from './components/account-sidebar/account-sidebar.component'

import { SidebarProvider } from './context/SidebarState'

export const App = () => {
  return (
    <Router>
      <SidebarProvider>
        <div className="min-h-screen max-w-7xl mx-auto flex flex-col lg:flex-row">
          <Header />
          <Main />
          <Aside />
          <ApplicationBar />
          <AccountSidebar />
        </div>
      </SidebarProvider>
    </Router>
  )
}