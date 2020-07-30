import React, { useState } from 'react'

import { ReactComponent as SVGChevronDown } from '../../assets/chevron-down.svg'

export const OptionsModal = ({ children, onClick }) => {
    const [expanded, setExpanded] = useState(false)
    const handleClick = () => {
        setExpanded(prevState => {
            return !prevState
        })
    }

    return (
        <>
            {expanded && <div onClick={handleClick} className="z-10 fixed inset-0 h-screen bg-black bg-opacity-50 lg:bg-transparent"></div>}
            {expanded && (<div className="lg:hidden z-20 fixed bottom-0 inset-x-0 flex items-end">
                <div className="bg-white rounded-t-lg w-full px-4 pt-4 pb-3 text-sm">
                    {children}
                    <button onClick={handleClick} className="rounded-full bg-gray-200 w-full font-medium text-sm py-2 mt-6">Cancel</button>
                </div>
            </div>)}
            {expanded && (<div className="hidden lg:block absolute top-0 right-0 w-64 bg-white z-10 shadow-md rounded-lg">
                {children}
            </div>)}
            <div className="absolute top-0 right-0 pr-2 pt-2">
                <button onClick={handleClick} className="relative rounded-full hover:bg-blue-500 bg-opacity-50">
                    <SVGChevronDown className="text-gray-700 h-4 w-4" />
                </button>
            </div>
        </>
    )
}
