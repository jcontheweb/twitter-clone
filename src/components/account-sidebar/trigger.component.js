import React, { useContext } from 'react'
import { SidebarContext } from '../../context/sidebar/SidebarState'
import { UserContext } from '../../context/user/UserState'

export const SidebarTrigger = ({ children }) => {
    const { open } = useContext(SidebarContext)
    const { avatar } = useContext(UserContext)

    return (
        <button onClick={open} className="rounded-full relative h-6 w-6 overflow-hidden mr-5 focus:outline-none">
            {avatar ? (
                <img src={avatar} alt="" />
            ) : (
                    <span className="absolute inset-0 bg-gray-400"></span>
                )}
        </button>
    )
}
