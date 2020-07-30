import React, { createContext, useReducer } from 'react'
import { SidebarReducer } from './SidebarReducer'

const initialState = {
    expanded: false
}

export const SidebarContext = createContext(initialState)

export const SidebarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SidebarReducer, initialState)

    const open = () => {
        dispatch({
            type: 'SIDEBAR_OPEN'
        })
    }

    const close = () => {
        dispatch({
            type: 'SIDEBAR_CLOSE'
        })
    }

    return (<SidebarContext.Provider value={{
        expanded: state.expanded,
        open,
        close
    }}>
        {children}
    </SidebarContext.Provider>)
}