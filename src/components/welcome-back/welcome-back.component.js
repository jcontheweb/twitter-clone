import React, { useState } from 'react'

import { ReactComponent as SVGChevronDown } from '../../assets/chevron-down.svg'
import { OptionsModal } from '../options-modal/options-modal.component'

export const WelcomeBack = () => {
    const [expanded, setExpanded] = useState(false)

    const handleClick = () => {
        setExpanded(prevState => {
            return !prevState
        })
    }

    return (
        <div className="py-4 px-1 bg-white relative shadow flex flex-col justify-center items-center mb-2">
            <OptionsModal>
                <button className="text-sm">See less often</button>
            </OptionsModal>
            <div className="text-lg font-bold mb-2">Welcome back</div>
            <p className="text-gray-600 mb-4 leading-5 text-sm text-center">
                Select some topics you're interested in to help personalize your Twitter experience, starting with finding people to follow.
                </p>
            <button className="bg-blue-500 text-white rounded-full px-4 py-2 leading-tight text-sm">Get started</button>
        </div>
    )
}
