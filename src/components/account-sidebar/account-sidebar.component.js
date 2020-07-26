import React, { useContext, useRef } from 'react'
import { SidebarContext } from '../../context/SidebarState'
import { ReactComponent as SVGClose } from '../../assets/x.svg'

import "./account-sidebar.styles.css"

export const AccountSidebar = () => {
    const { expanded, close } = useContext(SidebarContext)

    return (
        <>
            <div onClick={close} className={`overlay ${expanded && 'active'} bg-black bg-opacity-50 fixed inset-0`}></div>
            <div className={`sidebar ${expanded && 'active'} bg-white w-72 absolute inset-y-0 left-0`}>
                <div className="border-b p-3 flex justify-between items-center">
                    <p className="font-bold text-lg">Account info</p>
                    <button onClick={close}>
                        <SVGClose className="text-blue-500" />
                    </button>
                </div>
            </div>
        </>
    )
}