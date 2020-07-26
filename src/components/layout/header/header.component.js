import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserSettings } from '../../user-settings/user-settings.component'


export const Header = () => {
    const classList = "transition duration-150 hover:bg-blue-100 p-3 rounded-full leading-none inline-flex items-center mb-3 last:mb-0 capitalize"

    return (
        <header className="hidden lg:flex w-64 px-4 flex-col h-screen sticky top-0 justify-between py-4">
            <ul className="font-bold text-xl">
                <li>
                    <NavLink exact activeClassName="text-blue-500" className={classList} to="/">home</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="text-blue-500" className={classList} to="/explore">explore</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="text-blue-500" className={classList} to="/subscription">subscription</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="text-blue-500" className={classList} to="/announcements">announcements</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="text-blue-500" className={classList} to="/contact">contact</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="text-blue-500" className={classList} to="/settings">settings</NavLink>
                </li>
            </ul>
            <UserSettings />
        </header>
    )
}
