import React from 'react'

import { ReactComponent as SVGFlag } from '../../../assets/flag.svg'

export const ReportTweet = () => {
    return (
        <button className="flex items-center leading-tight focus:outline-none focus:shadow-outline">
            <SVGFlag className="h-4 w-4 mr-2 text-gray-700" />Report Tweet
        </button>
    )
}
