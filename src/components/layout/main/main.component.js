import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from '../../../pages/home.page'

export const Main = () => {
    return (
        <main className="flex-1 border-r border-l">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/explore">
                    explore
                </Route>
            </Switch>
        </main>
    )
}
