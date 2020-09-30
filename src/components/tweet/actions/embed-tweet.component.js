import React from 'react'

import { ReactComponent as SVGCode } from '../../../assets/code.svg'

export const EmbedTweet = () => {
    return (
        <button>
            <SVGCode className="h-4 w-4 mr-2 text-gray-700" />Embed Tweet
        </button>
    )
}
