import React, { useState } from 'react'

import { ReactComponent as SVGChevronDown } from '../../assets/chevron-down.svg'

import './options-modal.styles.css'

export const OptionsModal = ({ children, custom, style, inner }) => {
    const [expanded, setExpanded] = useState(false)
    const handleClick = () => {
        setExpanded(prevState => {
            return !prevState
        })
    }

    const TopRightChevron = () => {
        return (
            <div className="absolute top-0 right-0 pr-2 pt-2">
                <button onClick={handleClick} className="relative rounded-full hover:bg-blue-100 h-6 w-6 flex items-center justify-center text-gray-700 hover:text-blue-500">
                    <SVGChevronDown className="h-4 w-4" />
                </button>
            </div>
        )
    }

    const CustomButton = ({ style, inner }) => {
        return (
            <button onClick={handleClick} className={style}>{inner}</button>
        )
    }

    const MobileList = ({ children }) => {
        return (
            <div className="lg:hidden z-20 fixed bottom-0 inset-x-0 flex items-end">
                <div className="bg-white rounded-t-lg w-full px-4 pt-4 pb-3 text-sm">
                    <div className="Options-Modal__Mobile">
                        {children}
                    </div>
                    <button onClick={handleClick} className="rounded-full bg-gray-200 w-full font-medium text-sm py-2 mt-6">Cancel</button>
                </div>
            </div>
        )
    }

    const DesktopList = ({ children }) => {
        return (
            <div className="Options-Modal__Large hidden lg:block absolute top-0 right-0 bg-white z-10 shadow-element rounded-lg">
                {children}
            </div>
        )
    }

    const Clickaway = () => {
        return (
            <div onClick={handleClick} className="z-10 fixed inset-0 h-screen bg-black bg-opacity-50 lg:bg-transparent"></div>
        )
    }

    return (
        <>
            {expanded && <Clickaway />}
            {expanded && <MobileList>{children}</MobileList>}
            {expanded && <DesktopList>{children}</DesktopList>}
            {custom ? <CustomButton style={style} inner={inner} /> : <TopRightChevron />}
        </>
    )
}
