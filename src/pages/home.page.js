import React, { useContext } from 'react'
import { SidebarContext } from '../context/SidebarState'

export const Home = () => {
    const { open } = useContext(SidebarContext)

    return (
        <div>
            <div className="border-b p-3 sticky top-0 bg-white">
                <p className="font-bold text-lg">Home</p>
            </div>
            <div className="flex-1">
                <button onClick={open}>open</button>
            </div>
        </div>
    )
}
