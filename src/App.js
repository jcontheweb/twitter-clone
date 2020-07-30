import React, { useEffect } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from './components/layout/header/header.component'
import { Main } from './components/layout/main/main.component'
import { Aside } from './components/layout/aside/aside.component'
import { ApplicationBar } from './components/application-bar/application-bar.component'
import { AccountSidebar } from './components/account-sidebar/account-sidebar.component'

import { SidebarProvider } from './context/sidebar/SidebarState'
import { UserProvider } from './context/user/UserState'

export const App = () => {
  return (
    <Router>
      <UserProvider>
        <div className="min-h-screen max-w-6xl mx-auto flex flex-col lg:flex-row">
          <Header />
          <SidebarProvider>
            <Main />
            <AccountSidebar />
          </SidebarProvider>
          <Aside />
          <ApplicationBar />
        </div>
      </UserProvider>
    </Router>
  )
}