import React, { useContext, useEffect, useRef } from 'react'
import { SidebarContext } from '../../context/sidebar/SidebarState'
import { ReactComponent as SVGClose } from '../../assets/x.svg'

import "./account-sidebar.styles.css"

export const AccountSidebar = () => {
    const { expanded, close } = useContext(SidebarContext)
    const sidebar = useRef()

    useEffect(() => {
        const body = document.querySelector('body')

        if (!expanded) {
            body.classList.remove('overflow-hidden')
        } else {
            body.classList.add('overflow-hidden')
        }
    }, [expanded])


    return (
        <>
            <div onClick={close} className={`overlay ${expanded ? 'active ' : ''}bg-black bg-opacity-50 fixed inset-0 z-10`}></div>
            <div ref={sidebar} className={`sidebar ${expanded ? 'active ' : ''}bg-white w-72 fixed overflow-auto inset-y-0 left-0 z-10`}>
                <div className="border-b p-3 flex justify-between items-center sticky top-0 bg-white">
                    <p className="font-bold text-lg">Account info</p>
                    <button onClick={close}>
                        <SVGClose className="text-blue-500" />
                    </button>
                </div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eaque quis cupiditate veritatis ea magnam, ab obcaecati at iusto accusantium velit quam reiciendis! Accusantium ex similique minus provident ducimus id!
            </div>
        </>
    )
}