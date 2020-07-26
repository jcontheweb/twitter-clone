import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as SVGHome } from '../../assets/home.svg'
import { ReactComponent as SVGSearch } from '../../assets/search.svg'
import { ReactComponent as SVGBell } from '../../assets/bell.svg'
import { ReactComponent as SVGMail } from '../../assets/mail.svg'

export const ApplicationBar = () => {
    return (
        <div className="lg:hidden fixed bg-white bottom-0 inset-x-0 border-t grid grid-cols-4">

            <NavLink className="flex items-center justify-center transition duration-150 py-4" exact activeClassName="text-blue-500" to="/">
                <SVGHome />
            </NavLink>

            <NavLink className="flex items-center justify-center transition duration-150 py-4" exact activeClassName="text-blue-500" to="/explore">
                <SVGSearch />
            </NavLink>

            <NavLink className="flex items-center justify-center transition duration-150 py-4" exact activeClassName="text-blue-500" to="/subscription">
                <SVGBell />
            </NavLink>

            <NavLink className="flex items-center justify-center transition duration-150 py-4" exact activeClassName="text-blue-500" to="/announcements">
                <SVGMail />
            </NavLink>

        </div>
    )
}
