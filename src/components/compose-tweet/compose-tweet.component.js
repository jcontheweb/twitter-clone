import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as SVGFeather } from '../../assets/feather.svg'

export const ComposeTweet = () => {
    return (
        <div className="p-4 flex justify-end">
            <Link className="w-12 h-12 shadow-lg bg-blue-500 rounded-full overflow-hidden text-white flex items-center justify-center" to="/compose">
                <SVGFeather className="w-5"  />
            </Link>
        </div>
    )
}
