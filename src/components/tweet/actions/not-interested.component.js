import React from 'react'

import { ReactComponent as SVGFrown } from '../../../assets/frown.svg'

export const NotInterested = () => {
    return (
        <button>
            <SVGFrown className="h-4 w-4 mr-2 text-gray-700" />Not interested in this Tweet
        </button>
    )
}
