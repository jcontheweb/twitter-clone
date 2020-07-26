import React, { useState, useRef } from 'react'
import { ReactComponent as ChevronDown } from '../../assets/chevron-down.svg'
import { Dropdown } from './dropdown.component'

export const UserSettings = () => {
    const [expanded, setExpanded] = useState(false)
    const myRef = useRef();

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            close()
        }
    };

    const toggle = () => {
        expanded ? close() : open()
    }

    const open = () => {
        setExpanded(true)
        document.addEventListener('mousedown', handleClickOutside);
    }

    const close = () => {
        setExpanded(false)
        document.removeEventListener('mousedown', handleClickOutside);
    }

    return (
        <div ref={myRef} className="relative">
            {expanded && <Dropdown />}
            <button
                onClick={toggle}
                className="w-full transition duration-300 flex justify-between hover:bg-blue-100 text-sm rounded-full px-3 py-2 items-center focus:outline-none">
                <div className="flex items-center">
                    <span className="h-12 w-12 rounded-full bg-gray-200 mr-2"></span>
                    <div className="text-left leading-none">
                        <span className="block font-bold mb-1">Justin</span>
                        <span className="block text-gray-600">@justin</span>
                    </div>
                </div>
                <ChevronDown className="text-gray-700 h-5 w-5" />
            </button>
        </div>
    )
}
