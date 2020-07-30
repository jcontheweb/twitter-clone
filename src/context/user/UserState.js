import React, { createContext, useReducer } from 'react'
import { UserReducer } from './UserReducer'

import { ReactComponent as Avatar } from '../../assets/tob.jpg'

const initialState = {
    username: 'Justin',
    avatar: Avatar
}

export const UserContext = createContext(initialState)

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)

    return (<UserContext.Provider value={{
        username: state.username,
        avatar: state.avatar
    }}>
        {children}
    </UserContext.Provider>)
}