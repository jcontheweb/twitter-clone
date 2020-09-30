import React from 'react'

import { ReactComponent as SVGFlag } from '../../../assets/flag.svg'

export const ReportTweet = () => {
    return (
        <button>
            <SVGFlag className="h-4 w-4 mr-2 text-gray-700" />Report Tweet
        </button>
    )
}
