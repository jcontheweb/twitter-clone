import React from 'react'

import { ReactComponent as SVGMicOff } from '../../../assets/mic-off.svg'

export const Mute = ({ author }) => {
    return (
        <button>
            <SVGMicOff className="h-4 w-4 mr-2 text-gray-700" />Mute @{author.handle}
        </button>
    )
}
