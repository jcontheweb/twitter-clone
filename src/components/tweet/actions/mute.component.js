import React from 'react'

import { ReactComponent as SVGMicOff } from '../../../assets/mic-off.svg'

export const Mute = ({ author }) => {
    return (
        <button className="flex items-center leading-tight mb-5 focus:outline-none focus:shadow-outline">
            <SVGMicOff className="h-4 w-4 mr-2 text-gray-700" />Mute @{author.handle}
        </button>
    )
}
